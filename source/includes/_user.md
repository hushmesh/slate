# User info

> Example

```shell
$ curl https://api.twistapp.com/api/v2/batch \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d requests='[{"method": "GET", "url": "https://api.hshm.sh/v0/userinfo"}]'
```

`GET api.hshm.sh/v0/userinfo`

Retrieves user info for the access token

> Return object

```json
{
   "sub": "abc",
   "Name": "Alice",
   "Email": "alice@hushmesh.net"
}

```
