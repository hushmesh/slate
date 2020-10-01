# Browser extension

If&nbsp;you&rsquo;re developing a&nbsp;browser extension most of&nbsp;the information related to&nbsp;web application going to&nbsp;be&nbsp;relevant. The main difference going to&nbsp;be&nbsp;mesh in&nbsp;experience. We&rsquo;re going to&nbsp;cover all differences in&nbsp;this section&nbsp;&mdash; we&rsquo;re going to&nbsp;use Chrome browser as&nbsp;an&nbsp;example.

## Identity API

> Identity API:

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
            let relationshipKey = ''
            if (jwt) {
              const parts = jwt.split('.')
              const jwtObj = JSON.parse(atob(parts[1]))
              relationshipKey = jwtObj.relationshipKey
            }
            resolve({ accessToken, relationshipKey })
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


In&nbsp;browser extensions we&nbsp;cannot use the same callback flow as&nbsp;per web applications. Usually your browser extension will have url similar to `chrome-extension://npmgajiaihfjibkgojndemlehpalicjc/home.html` and we&nbsp;cannot open such url as&nbsp;a&nbsp;callback because of&nbsp;security restrictions.

Instead of&nbsp;the callback we&nbsp;should use browser&rsquo;s [identity API](https://developer.chrome.com/apps/identity) and receive our tokens information in&nbsp;the response.

Let&rsquo;w walk through the code example:

* First we&nbsp;create `codeChallenge` and `codeVerifier` the same way as&nbsp;per web application&nbsp;&mdash; we&rsquo;re still going to&nbsp;need them.

* We&rsquo;re getting redirect url using `identity.getRedirectURL()` method.

* We&rsquo;re creating url for API call with our application parameters. Make sure to&nbsp;use your real application `clientId` here from relying party registration tool.

* Then we&rsquo;re launching auth flow using `identity.launchWebAuthFlow()` method.

* After successful mesh in&nbsp;we&rsquo;re getting back code which we&nbsp;should exchange to&nbsp;tokens&nbsp;&mdash; this logic is&nbsp;exactly the same as&nbsp;for the web and you can find more details about it&nbsp;in [OAuth tokens](https://developer.hushmesh.com/#oauth-tokens) section.


## Caveats

To&nbsp;store tokens and `relationshipKey` it&rsquo;s better to&nbsp;use your extension background. If&nbsp;you&rsquo;re going to&nbsp;put them in&nbsp;the popup, they&rsquo;re going to&nbsp;be&nbsp;cleared every time user is&nbsp;closing the popup.
