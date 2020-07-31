# Mesh out

To finish authorized access to the Mesh, you should use mesh out API. It is a simple GET call to '/logout' endpoint. Please make sure to provide usual Bearer Authorization header, otherwise it is not going to work.

> Header example

```
axiosConfig.headers = {
  Authorization: `Bearer [YOUR_TOKEN]`
}
```

## Meshlib

If you are already using our [meshlib library](https://www.npmjs.com/package/@hushmesh/meshlib), you can just use `meshout` method out of the box. Don't forget to provide a valid access token as an argument.

> Mesh out with meshlib

```javascript
  import meshlib from '@hushmesh/meshlib'

  // in the handler:
  meshlib.meshout(accessToken)

```

## Meshout API

> Example

```shell
  https://api.hshm.sh/v0/logout
```

`GET api.hshm.sh/v0/logout`

Finishes Mesh session

> Return object

```json
{
   "statusCode": 200,
   "statusDescription": "Success"
}

```
