# URL join

This allows one to join a workspace using a special URL invite link.

> URL join object:

```json
{
   "url" : "https://twistapp.com/j/c5370f3ab4bad2d7eb6c432a17c37986"
}
```

### Properties of URL join object

| Name | Type | Description |
| ---- | --- | --- |
| url | String | The URL to be used to join a workspace |


## Get or create URL join link

> Example:

```shell
curl https://api.twistapp.com/api/v2/url_join/get_or_create \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d workspace_id=5517
```

`POST /api/v2/url_join/get_or_create`

Gets or creates a URL join link to a workspace.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| workspace_id | Number | Yes | The id of the workspace |

> Return value:

```json
{
   "url" : "https://twistapp.com/j/c5370f3ab4bad2d7eb6c432a17c37986"
}
```

## Disable URL join link

> Example:

```shell
curl https://api.twistapp.com/api/v2/url_join/disable \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d workspace_id=5517
```

`POST /api/v2/url_join/disable`

Disables a URL join link to a workspace.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| workspace_id | Number | Yes | The id of the workspace |

> Return value:

```json
{
   "status": "ok"
}
```

## Join workspace

> Example:

```shell
curl https://api.twistapp.com/api/v2/url_join/join_workspace \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d url_invite_code="https://twistapp.com/j/c5370f3ab4bad2d7eb6c432a17c37986"
```

`POST /api/v2/url_join/join_workspace`

Joins user to invited workspace using the URL link.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| url_invite_code | Number | Yes | The URL join link |

### Return value

A workspace object is returned.

