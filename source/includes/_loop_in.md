# Loop in

This allows to add threads to a channel, add comments to a thread, or messages
to conversation by sending them to an email address.

> Loop in object:

```json
{
   "email" : "https://twistapp.com/j/c5370f3ab4bad2d7eb6c432a17c37986"
}
```

### Properties of URL join object

| Name | Type | Description |
| ---- | --- | --- |
| email | String | The email address to use to add threads/comments/messages |

## Get or create a loop in email

> Example:

```shell
curl https://api.twistapp.com/api/v2/loop_in/get_or_create \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d obj_type=THREAD \
  -d obj_id=32038
```

`POST /api/v2/loop_in/get_or_create`

Gets or creates a loop in email.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| obj_type | String | Yes | The type of the object, one of `CHANNEL`, `THREAD` or `CONVERSATION` |
| obj_id | Number | Yes | The id of the object |

> Return value:

```json
{
   "email" : "https://twistapp.com/j/c5370f3ab4bad2d7eb6c432a17c37986"
}
```


## Disable loop in email

> Example:

```shell
curl https://api.twistapp.com/api/v2/loop_in/disable \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d obj_type=THREAD \
  -d obj_id=32038
```

`POST /api/v2/loop_in/disable`

Disables a loop in email.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| obj_type | String | Yes | The type of the object, one of `CHANNEL`, `THREAD` or `CONVERSATION` |
| obj_id | Number | Yes | The id of the object |

> Return value:

```json
{
   "status": "ok"
}
```
