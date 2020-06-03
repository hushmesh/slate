# Meshout

To finish authorized access to the Mesh, you should use meshout API. It is a simple GET call to '/logout' endpoint. Please make sure to provide usual Bearer Authorization header, otherwise it is not going to work.

> Header example

```axiosConfig.headers = {
  Authorization: `Bearer [YOUR_TOKEN]`
}
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
