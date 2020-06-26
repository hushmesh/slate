# Browser extension

If you're developing a browser extension most of the information related to web application going to be relevant. The main difference going to be mesh in experience. We're going to cover all differences in this section - we're going to use Chrome browser as an example.

## Mesh in browser extension

In browser extensions we cannot use the same callback flow as per web applications. Usually your browser extension will have url similar to `chrome-extension://npmgajiaihfjibkgojndemlehpalicjc/home.html` and we cannot open such url as a callback because of security restrictions.

Instead of the callback we should use browser's [identity API](https://developer.chrome.com/apps/identity) and receive our tokens information in the response.

Let'w walk through the code example:

* First we create codeChallenge and codeVerifier the same way as per web application - we're still going to need them

* We're getting redirect url using identity.getRedirectURL() method

* We're creating url for api call with our application parameters. Make sure to use your real application clientId here from relying party registration tool

* Then we're launching auth flow using identity.launchWebAuthFlow() method

* After successful mesh in we're getting back code which we should exchange to tokens - this logic is exactly the same as for the web and you can find more details about it in [Oauth tokens section](https://developer.hushmesh.com/#oauth-tokens)



> Identity API :

```javascript
<script>
  const getAuthUrl = (options) => {
    const BASE_URL = 'https://api.hshm.sh/v0/init'
    const { responseType, clientId, redirectUri } = options
    const url = `${BASE_URL}?&response_type=${responseType}&client_id=${clientId}&redirect_uri=` + encodeURIComponent(redirectUri)
    return url
  }

  const meshin = () => {
    const { codeChallenge, codeVerifier } = generateChallengeData()
    return new Promise((resolve, reject) => {
      const redirectUri = chrome.identity.getRedirectURL()
      const url = getAuthUrl({
        clientId: 'YOUR_APP_CLIENT_ID',
        responseType: 'code',
        redirectUri,
        codeChallenge,
        codeChallengeMethod: 'S256',
      })

      chrome.identity.launchWebAuthFlow({
        url,
        interactive: true,
      }, (res) => {
        const code = getUrlParameter('code', res)

        // From there logic is exactly the same as for web app
        if (code) {
          tokenApi.getTokens({ code, codeVerifier }).then((res) => {
            const accessToken = res.data.access_token
            const jwt = res.data.id_token
            let masterKey = ''
            if (jwt) {
              const parts = jwt.split('.')
              const jwtObj = JSON.parse(atob(parts[1]))
              masterKey = jwtObj.masterKey
            }
            resolve({ accessToken, masterKey })
          }).catch((err) => {
            reject(err)
          })
        } else {
          reject(res)
        }
      })
    })
  }
</script>
```

## Caveats

To store tokens and masterKey it's better to use your extension background. If you're going to put them in the popup, they're going to be cleared every time user is closing popup.
