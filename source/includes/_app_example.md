# Application example

In&nbsp;this section we&nbsp;are going to&nbsp;explore simple application [hushsafe.com](https://hushsafe.com/) that demonstrates the unique security capabilities enabled by&nbsp;the mesh.

We&nbsp;are going to&nbsp;use mesh in&nbsp;button and auth experience, getting user&rsquo;s data and to&nbsp;use storage API.

## Application stack

Hushsafe is&nbsp;single page application, stack we&nbsp;are using:

- Vue.js framework
- Vue router as application router
- Vuex as state management
- axios to make API calls

## App registration

First step for any mesh application should be&nbsp;app registration&nbsp;in [relying parties tool](http://developer.hushmesh.com/relying-party-registration). Mesh in&nbsp;in&nbsp;the tool and you&rsquo;re going be&nbsp;able to&nbsp;create and manage your applications.

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

After successful app registration we&nbsp;can copy Mesh in&nbsp;button code example from our application page&nbsp;in [relying parties&nbsp;tool](https://developer.hushmesh.com/relying-party-registration).

You can find all information about mesh in&nbsp;button&nbsp;in [mesh in&nbsp;section](http://developer.hushmesh.com/#meshin).

On&nbsp;Hushsafe.com we&nbsp;are using exactly the approach from the mesh in&nbsp;section.

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

On&nbsp;Hushsafe.com we&rsquo;re using our default mesh in&nbsp;experience with&nbsp;QR code popup, because of&nbsp;that we&nbsp;need callback page which can close the popup and redirect to&nbsp;the app auth page (which responsible for the exchange of&nbsp;the code for tokens).

Callback page should be&nbsp;specified as `redirectUri`. Url going to&nbsp;have query string with exchange code which you should use to&nbsp;exchange code to&nbsp;the tokens.

`https://hushsafe.com/auth?access_token=code=your_exchange_code`

From this url we&nbsp;are grabbing code and providing it&nbsp;to&nbsp;auth page.

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

At&nbsp;this point we&nbsp;already have code to&nbsp;exchange it&nbsp;to&nbsp;tokens, so&nbsp;the main goal of&nbsp;the page is&nbsp;to&nbsp;make api call to&nbsp;get tokens and depends on&nbsp;the results go&nbsp;to&nbsp;another route(on success) or&nbsp;show error message on&nbsp;error.

To&nbsp;learn more about token exchange see [Exchange code to OAuth&nbsp;tokens](https://developer.hushmesh.com/#exchange-code-to-oauth-tokens).

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

If&nbsp;nesessary, at&nbsp;this point we&nbsp;can get meshid in&nbsp;user&rsquo;s info with [userinfo](http://developer.hushmesh.com/#user) api. This step is&nbsp;optional and you may skip it&nbsp;if&nbsp;you don&rsquo;t need user&rsquo;s info but only would like to&nbsp;use storage api.

## Key derivation

> Formulas (pseudocode)

```javascript
// Keycard 1 Encryption Key
K1EK = HMAC (relationshipKey, cardId)

// Use our new key to get keycard number
Keycard 1 Cell Number = HMAC (K1EK, cardId)

// Now we can encrypt our content with our key and store it in our cell
Cell Content = { Keycard 1 Content } K1EK
```
We want to encrypt each keycard with different key. How is it possible? The power of unique relationship key going to help us.

With a unique relationship key, you can derive any number of encryption keys for whatever purpose in whatever context, and then derive cell numbers for each one of them. But if you just have the cell number and its encrypted content, you can not do anything with it.

This is how any Relying Party can cryptographically secure something to a user (as in "attach"). It is great for decentralized access management, secure document storage, digital claims etc.

Let's take a look at a code example:

> Cells service

```javascript
import CryptoJS from 'crypto-js'
import crypto from '@/services/crypto'
import store from '@/store'

// Here we're using our formulas on practice
// Encryption key:
const createEncKey = (title) => {
  // getting our relationshipKey from the store
  const secret = store.getters['user/relationshipKey']
  return CryptoJS.HmacSHA256(title, secret).toString(CryptoJS.enc.Hex)
}

// Then we can calculate cell number
const createCellNum = (key, title) => {
  return CryptoJS.HmacSHA256(title, key).toString(CryptoJS.enc.Hex)
}

// Encypt/decrypt implementation may be different,
// one simple approach is described in the next section
const encCellContent = (key, data) => {
  return crypto.encrypt(data, key)
}

const decCellContent = (key, data) => {
  return crypto.decrypt(data, key)
}
```

> Create new keycard example

```javascript
// title and data are the input from a user
const { title, data } = payload
// creating unique card id
const cardId = helpers.makeId()
// and here we're using our cells service
const key = cells.createEncKey(cardId)
const cellNum = cells.createCellNum(key, cardId)
const cellContent = cells.encCellContent(key, data)

// Keycard is ready and can be stored in any key/value store
const keycard = {
  id: cardId,
  title,
  data: cellContent,
  createdAt: new Date()
}
```

## Encryption

> Crypto.js example

```javascript
import encUTF8 from 'crypto-js/enc-utf8'
import AES from 'crypto-js/aes'
import store from '@/store'

const encrypt = (value, secret) => {
  // Here we're using our derived key as secret
  return AES.encrypt(value, secret).toString()
}

const decrypt = (value, secret) => {
  return AES.decrypt(value, secret).toString(encUTF8)
}

export default {
  encrypt,
  decrypt
}
```

We&nbsp;don&rsquo;t want to&nbsp;send unencrypted data, so&nbsp;we&nbsp;should prepare a&nbsp;solution to&nbsp;encrypt/decrypt data. Here we&rsquo;re using crypto.js library and a derived key as&nbsp;a&nbsp;secret.

## Fetch and store data

> Storage API usage

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

Now we&nbsp;can use Storage API to&nbsp;save and fetch data.

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

To&nbsp;save data we&nbsp;should provide object&nbsp;id. In&nbsp;case of&nbsp;hushsafe we&nbsp;want to&nbsp;store user&rsquo;s keycards, so&nbsp;let&rsquo;s call it "keycards". Our full endpoint going to&nbsp;be
`https://api.hshm.sh/v0/storage/keycards`

You free to&nbsp;decide what format do&nbsp;you want to&nbsp;use. In&nbsp;our case each keycard has four fields: `id`, `title`, `data`, `createdAt`. 

As you can see, our data is&nbsp;encrypted with crypto.js.

## Fetch and delete&nbsp;data

To&nbsp;fetch data back we&rsquo;re going to&nbsp;use the same endpoint but `GET` request, or&nbsp;`DELETE`&nbsp;request for deleting
`https://api.hshm.sh/v0/storage/keycards`

[Storage API docs](http://developer.hushmesh.com/#storage)

## Object&nbsp;IDs available to&nbsp;a&nbsp;user

> Example

```shell
  GET https://api.hshm.sh/v0/storage
```

In&nbsp;case you want to&nbsp;get all object ids meshedin user has an&nbsp;access, you can do&nbsp;it&nbsp;by&nbsp;sending request&nbsp;to:

`GET api.hshm.sh/v0/storage`
