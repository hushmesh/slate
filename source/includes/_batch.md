# Batching requests

> Example

```shell
$ curl https://api.twistapp.com/api/v2/batch \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d requests='[{"method": "GET", "url": "https://api.twistapp.com/api/v2/workspaces/get?token=..."},
                {"method": "GET", "url": "https://api.twistapp.com/api/v2/workspaces/getone?token=...&id=201"}]'
```

`POST /api/v2/batch`

Batching allows you to pass several requests in a single HTTP request. Once all operations have been completed, a consolidated response will be passed back to you and the HTTP connection will be closed.

> Return object

```json
[
  {
    "code": 200,
    "headers": "...",
    "body": "..."
  },
  {
    "code": 200,
    "headers": "...",
    "body": "..."
  }
]
```

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| requests | Array of Objects | Yes | The requests to send |
| requests["method"] | String | Yes | The HTTP method like `GET` or `POST` |
| requests["url"] | String | Yes | The completed URL with any arguments needed |
