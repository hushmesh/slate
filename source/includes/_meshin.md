# Mesh&nbsp;in

In&nbsp;order to&nbsp;make authorized calls to&nbsp;the Mesh, you must first obtain an&nbsp;access token. This section describes how to&nbsp;obtain such a&nbsp;token.

Before getting started, you need&nbsp;to [create an&nbsp;app](http://developer.hushmesh.com/relying-party-registration) and configure a&nbsp;valid redirect URL. A&nbsp;registered HushMesh integration is&nbsp;assigned a&nbsp;unique Client ID&nbsp;and Client Secret which are needed for the OAuth2&nbsp;flow.

Recommended way to&nbsp;autorize user to&nbsp;the mesh as&nbsp;a&nbsp;developer is&nbsp;by&nbsp;using our npm [meshlib](https://www.npmjs.com/package/@hushmesh/meshlib) library.

## Mesh&nbsp;in button

> Include an init:

```javascript
import { Auth } from '@hushmesh/meshlib'

const meshApi = new Auth({
  clientId: 'YOUR_CLIENT_ID',
  responseType: 'code',
  redirectUri: 'https://beta.hushsafe.com/auth',
  codeChallenge,
  codeChallengeMethod: 'S256',
  isPopup: true
})
```

If&nbsp;you are using any modern JavaScript framework, you can create mesh in&nbsp;button component and inside the component include and initialize mesh in&nbsp;library. You can [install meshlib](https://www.npmjs.com/package/@hushmesh/meshlib) from npm and include it&nbsp;in&nbsp;your project.

> Inside handler:

```javascript
meshApi.meshin()
```

After that you just need to&nbsp;use mesh in&nbsp;method inside your `onClick` handler.

After successful mesh in&nbsp;you&rsquo;re going to&nbsp;be&nbsp;redirected to&nbsp;the page, specified in&nbsp;the `redirectUri`.

## How to&nbsp;generate code challenge and code verifier

> Generate challenge data example

```javascript
import CryptoJS from 'crypto-js'

const generateChallengeData = () => {
  const codeVerifier = CryptoJS.lib.WordArray.random(128).toString(CryptoJS.enc.Base64)
  const codeChallenge = CryptoJS.enc.Base64.stringify(sha256(codeVerifier)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
  return { codeVerifier, codeChallenge }
}
```

In&nbsp;order to&nbsp;get user tokens first you have to&nbsp;obtain the authorization code. Next you can exchange your authorization code and code verifier for tokens.

## Exchange code to&nbsp;OAuth&nbsp;tokens

> Token service example

```javascript
import axios from 'axios'

const BASE_URL = 'https://api.hshm.sh/v0/getToken'
const CLIENT_ID = 'YOUR_CLIENT_ID'
const REDIRECT_URI = window.location.origin

const getTokens = (payload) => {
  const { code, codeVerifier } = payload

  const params = new URLSearchParams()
  params.append('client_id', CLIENT_ID)
  params.append('code_verifier', codeVerifier)
  params.append('grant_type', 'authorization_code')
  params.append('code', code)
  params.append('redirect_uri', encodeURIComponent(REDIRECT_URI))

  return axios.post(BASE_URL, params)
}

export default {
  getTokens
}
```

The last step is&nbsp;to&nbsp;exchange the code which you&rsquo;re going to&nbsp;get back as&nbsp;query parameter in&nbsp;the URL and your initial code verifier to&nbsp;OAuth tokens.

> Use token service

```javascript
tokenService.getTokens(payload).then(res => {
  const accessToken = res.data.access_token
  const jwt = res.data.id_token
  let relationshipKey = ''

  if (jwt) {
    const tokens = jwt.split('.')
    const jwtObj = JSON.parse(atob(tokens[1]))
    relationshipKey = jwtObj.relationshipKey
  }
  // At this point you have accessToken
  // which should be used in Bearer authorization header
  // to access other Mesh API endpoints
})
```

## Mesh&nbsp;in example for a&nbsp;simple HTML/JS&nbsp;page

> Generate button

```html
<button id="meshin-button" class="meshin-button">mesh in</button>
```

```html
<script src="https://unpkg.com/@hushmesh/meshlib/dist/meshlib.js"></script>
```

```javascript
const meshApi = new Meshlib.Auth({
  clientId: 'YOUR_CLIENT_ID',
  responseType: 'code',
  redirectUri: 'https://beta.hushsafe.com/auth',
  codeChallenge,
  codeChallengeMethod: 'S256',
})
const meshinButton = document.getElementById('meshin-button')
meshinButton.onclick = function(event) {
  meshApi.meshin()
}
```

You can find generated button code example for your application&nbsp;on [your application page](http://developer.hushmesh.com/relying-party-registration).

Button code contains three parts:

1. HTML for your button. You can add your own CSS or&nbsp;apply any CSS classes from your framework.
2. Script including tiny meshlib library to&nbsp;your application.
3. Library initialization with your application parameters.
