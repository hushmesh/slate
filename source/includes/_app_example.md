# Alpplication example

In this section we are going to explore simple application  [hushsafe.com](https://hushsafe.com/) that demonstrates the unique security capabilities enabled by the mesh.

We are going to use meshin button and auth experience, getting user's data and to use storage API.

## Application stack

Hushsafe is single page application, stack we are using:
* Vue.js framework
* Vue router as application router
* Vuex as state management
* axios to make API calls

## App registration

First step for any mesh application should be app registration in [relying parties tool](http://developer.hushmesh.com/relying-parties). Meshin in the tool and you're going be able to create and manage your applications.

## Meshin button

> Example:

```javascript
import Meshlib from '@/assets/js/meshlib'
const meshApi = new Meshlib({
  clientId: 'demo',
  responseType: 'token_id_token',
  redirectUri: 'https://beta.hushsafe.com/auth'
})

// Inside click handler
meshApi.meshin()
```

After successful app registration we can copy Meshin button code from our application page in [relying parties tool](http://developer.hushmesh.com/relying-parties)

You can find all information about meshin button in [meshin section](http://developer.hushmesh.com/#meshin)

On Hushsafe.com we are using approach from "JavaScript frameworks compatibility" section

## Redirect page

> Example

```javascript
mounted () {
  // getting tokens data
  const accessToken = this.$route.query.access_token
  const jwt = this.$route.query.id_token

  if (accessToken) {
    this.isLoading = true
    // save access token
    this.$store.dispatch('user/setAccessToken', accessToken)
    // now with the token we can get user data
    this.$store.dispatch('user/getUserData')
      .catch(() => {
        this.isLoading = false
      })
  }

  if (jwt) {
    const tokens = jwt.split('.')
    const jwtObj = JSON.parse(atob(tokens[1]))
    // save master key to use it for encoding/decoding data
    this.$store.dispatch('user/setMasterKey', jwtObj.masterKey)
  }
}
```

After successful meshin we are getting back to redirect page, which we specified in button meshin parameters as `redirectUri`. Url going to have query string with data which we are going to use in our application.

`https://hushsafe.com/auth?access_token=token_here&id_token=id_token_data`

From this url we are grabbing tokens data and saving it to use later

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

We don't want to send unencrypted data, so we should prepare a solytion to encrypt/decrypt data. Here we're using crypto.js library and our masterkey as a secret.

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
