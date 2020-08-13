# Mesh out

## Header example

> Header example

```
axiosConfig.headers = {
  Authorization: `Bearer [YOUR_TOKEN]`
}
```

To&nbsp;finish authorized access to&nbsp;the Mesh, you should use mesh out API. It&nbsp;is&nbsp;a&nbsp;simple `GET` call to `/logout` endpoint.

Please make sure to&nbsp;provide usual Bearer Authorization header, otherwise it&nbsp;is&nbsp;not going to&nbsp;work.



## Meshlib

> Mesh out with meshlib

```javascript
  import meshlib from '@hushmesh/meshlib'

  // in the handler:
  meshlib.meshout(accessToken)

```

If&nbsp;you are already using our [meshlib library](https://www.npmjs.com/package/@hushmesh/meshlib), you can just use `meshout` method out of&nbsp;the box.

Don&rsquo;t forget to&nbsp;provide a&nbsp;valid access token as&nbsp;an&nbsp;argument.



## Meshout API

> Example

```shell
  https://api.hshm.sh/v0/logout
```

`GET api.hshm.sh/v0/logout`

— finishes Mesh session.

> Return object

```json
{
   "statusCode": 200,
   "statusDescription": "Success"
}

```
