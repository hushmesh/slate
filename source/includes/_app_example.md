# Application example

In this section we are going to explore simple application  [hushsafe.com](https://hushsafe.com/) that demonstrates the unique security capabilities enabled by the mesh.

We are going to use mesh in button and auth experience, getting user's data and to use storage API.

## Application stack

Hushsafe is single page application, stack we are using:
* Vue.js framework
* Vue router as application router
* Vuex as state management
* axios to make API calls

## App registration

First step for any mesh application should be app registration in [relying parties tool](http://developer.hushmesh.com/relying-party-registration). Mesh in in the tool and you're going be able to create and manage your applications.

## Mesh in button

> Example:

```javascript
import { Auth } from '@hushmesh/meshlib'
import crypto from '@/services/crypto'

const { codeChallenge, codeVerifier } = crypto.generateChallengeData()

const meshApi = new Auth({
  clientId: '9h2fhfUVuS9jZ8uVbhV3vC5AWX39IVUW',
  responseType: 'code',
  redirectUri: window.location.origin + '/callback',
  codeChallenge,
  codeChallengeMethod: 'S256',
  isPopup: true
})

// Inside click handler
meshApi.meshin()
```

After successful app registration we can copy Mesh in button code example from our application page in [relying parties tool](https://developer.hushmesh.com/relying-party-registration)

You can find all information about mesh in button in [mesh in section](http://developer.hushmesh.com/#meshin)

On Hushsafe.com we are using exactly the approach from the mesh in section

## Callback page

> Example

```javascript
mounted () {
  if (window.opener) {
    window.opener.location.href = window.location.origin + '/auth' + window.location.search
    window.close()
  } else {
    window.location.href = window.location.origin + '/auth' + window.location.search
  }
}
```

On Hushsafe.com we're using our default mesh in experience with QR code popup, because of that we need callback page which can close the popup and redirect to the app auth page (which responsible for the exchange of the code for tokens)

Callback page should be specified as `redirectUri`. Url going to have query string with exchange code which you should use to exchange code to the tokens.

`https://hushsafe.com/auth?access_token=code=your_exchange_code`

From this url we are grabbing code and providing it to auth page.

## Auth page

> Example

```javascript
mounted () {
  const code = this.$route.query.code
  const codeVerifier = sessionStorage.getItem('code_verifier')

  this.$store.dispatch('user/getTokens', { code, codeVerifier })
    .then(() => {
      // success, at this point we have tokens
      // and can use any Mesh API
      // userinfo in this example
      this.$store.dispatch('user/getUserData')
    })
    .catch((err) => {
      // error
    })
}
```

At this point we already have code to exchange it to tokens, so the main goal of the page is to make api call to get tokens and depends on the results go to another route(on success) or show error message on error.

To learn more about token exchange see [Exchange code to oauth tokens](https://developer.hushmesh.com/#exchange-code-to-oauth-tokens)

## Getting user's info

```javascript
import axios from 'axios'
import store from '@/store'

const BASE_URL = 'https://api.hshm.sh/v0/userinfo'
const axiosConfig = {}

// here we're setting received token to axios header
const setHeaders = () => {
  const accessToken = store.getters['user/accessToken']
  if (accessToken) {
    axiosConfig.headers = {
      Authorization: `Bearer ${accessToken}`
    }
  }
}

const getUserData = () => {
  // Fetching user data like name, email etc.
  setHeaders()
  return axios.get(BASE_URL, axiosConfig)
}

export default {
  getUserData
}

```

If nesessary, at this point we can get meshid in user's info with [userinfo](http://developer.hushmesh.com/#user) api. This step is optional and you may skip it if you don't need user's info but only would like to use storage api.

## Encryption

> Crypto.js example

```javascript
import encUTF8 from 'crypto-js/enc-utf8'
import AES from 'crypto-js/aes'
import store from '@/store'

const encrypt = value => {
  // To encrypt/decrypt values we are using user's master key
  const secret = store.getters['user/masterKey']
  return AES.encrypt(value, secret).toString()
}

const decrypt = value => {
  const secret = store.getters['user/masterKey']
  return AES.decrypt(value, secret).toString(encUTF8)
}

export default {
  encrypt,
  decrypt
}
```

We don't want to send unencrypted data, so we should prepare a solution to encrypt/decrypt data. Here we're using crypto.js library and our masterkey as a secret.

## Storage API

> Storage api usage

```javascript
import axios from 'axios'
import store from '@/store'

const BASE_URL = 'https://api.hshm.sh/v0/storage'

const setHeaders = () => {
  const axiosConfig = { headers: {} }
  const accessToken = store.getters['user/accessToken']
  if (accessToken) {
    axiosConfig.headers = {
      Authorization: `Bearer ${accessToken}`
    }
  }
  return axiosConfig
}

const fetchData = id => {
  // To fetch data you're going to need an object id you've created before
  // You can also get all object ids available for user
  // by GET request to BASE_URL
  const config = setHeaders()
  return axios.get(`${BASE_URL}/${id}`, config)
}

const storeData = (id, data) => {
  // To store the data you have to provide object id
  // and data which can be any format including binary
  const config = setHeaders()
  config.headers['Content-Type'] = 'application/json'
  return axios.post(`${BASE_URL}/${id}`, data, config)
}

export default {
  fetchData,
  storeData
}
```

Now we can use storage api to save and fetch data

## Save data

> Keycard example

```json
{
  "id": "D00g0sxZ",
  "title": "Keycard Title",
  "data": "U2FsdGVkX19Sm+yIbQYNf1cetF14oA62KU97GCmFU3Y=",
  "createdAt": "2020-03-12T15:33:00.909Z"
}
```

To save data we should provide object id. In case of hushsafe we want to store user's keycards, so let's call it 'keycards'.
Our full endpoint going to be
`https://api.hshm.sh/v0/storage/keycards`

You free to decide what format do you want to use. In our case each keycard has four fields: id, title, data, createdAt.
As you can see, our data is encrypted with crypto.js

## Fetch and Delete data

To fetch data back we're going to use the same endpoint but GET request, to delete - DELETE request
`https://api.hshm.sh/v0/storage/keycards`

[Storage api docs](http://developer.hushmesh.com/#storage)

## Object Ids available to user

> Example

```shell
  GET https://api.hshm.sh/v0/storage
```

In case you want to get all object ids meshedin user has an access, you can do it by sending request to

`GET api.hshm.sh/v0/storage`
