# OAuth tokens

## Object fields

> Return object

```json
{
   "access_token": "c8b6935c7e864315beeb959f0043a08d",
    "expires_in": 86364,
    "id_token": "eyJhbGciOiJFUzM4NCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiOWgyZmhmVVZ1UzlqWjh1VmJoVjN2QzVBV1gzOUlWVVciXSwiZXhwIjoxNTkxMjc1ODQzLCJpYXQiOjE1OTEyNTc1ODMsImlzcyI6Imh0dHBzOi8vYXBpLmhzaG0uc2giLCJqdGkiOiI5aDJmaGZVVnVTOWpaOHVWYmhWM3ZDNUFXWDM5SVZVVy0wZXRyYmx2OE1rdUQ5VDk4QUtja1pnejdRcGhWRHFwUyIsIm1hc3RlcktleSI6IlFRT1kyQ25vRmlknnZ4aWVRbzh0azdBZFlCbmdMb2I0Iiwic3ViIjoiOWgyZmhmVVZ1UzlqWjh1VmJoVjN2QzVBV1gzOUlWVVctMGV0cmJsdjhNa3VEOVQ5OEFLY2taZ3o3UXBoVkRxcFMifQ._OhQZUnsN-vd31COikcqWr_YlyPhQju4wEZLRgd_QS8EqvdTPTaMI0Ww-aNVhuTKQ09fY41jiwVNgm979t0RTkelR1gM1fFmKhyFVp3uoUUDOg95SmqQS69QzSzNGPym",
   "refresh_token": "333a5730763f447594e08869401ffe22",
    "scope": "",
    "token_type": "Bearer"
}

```

After the exchange your authorization code and code verifier for tokens you&rsquo;re going to&nbsp;receive an&nbsp;object with few fields:

| Field | Description |
| ----------- | ----------- |
| `access_token` | Access token to use to access Mesh API. |
| `expires_in` | When current token going to be expired. |
| `id_token` | JWT token which contains your masterKey.  |
| `refresh_token` | Refresh token can be used for tokens update without additional login. |
| `token_type` | Token type. Currently Bearer only. |



Two most important pieces of&nbsp;information here are:

`access_token` &mdash; token which you have to&nbsp;use to&nbsp;access any Mesh API in&nbsp;the authorization header (without it&nbsp;you&rsquo;re going to&nbsp;have 401 error&nbsp;&mdash; anautorized).

`id_token` &mdash; it&rsquo;s JWT token, which contains information in&nbsp;it&rsquo;s body. The most important part is&nbsp;unique masterKey, which can be&nbsp;used for different usecases (for example, as&nbsp;a&nbsp;key for your encryption/decryption process). To&nbsp;learn more about id_token structure you may want to&nbsp;take a&nbsp;look at&nbsp;our [token viewer](https://developer.hushmesh.com/token-viewer).

## Parsing masterKey

> parse masterKey

```javascript
const idToken = 'your_id_token_here'
const parts = idToken.split('.')
const jwtObj = JSON.parse(atob(parts[1]))
const masterKey = jwtObj.masterKey
```

This sample shows how to&nbsp;parse `masterKey` from `id_token`:
