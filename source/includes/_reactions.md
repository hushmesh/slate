# Reactions

Reactions can be added to threads, comments or conversation messages.

> Reaction object:

```json
{
   "👍" : [
      10076,
      10073
   ],
   "😄" : [
      10076
   ]
}
```

### Properties of reaction object

The reaction object is either `null` or has one or more key-value pairs.

| Name | Type | Description |
| ---- | --- | --- |
| *key* | String | The reaction added by one or more users |
| *value* | Array of Numbers | The users that added that specific reaction |


## Get reactions

> Example:

```shell
curl https://api.twistapp.com/api/v2/reactions/get \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d comment_id=206113
```

`POST /api/v2/reactions/get`

Gets reactions of a thread, comment or conversation message.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| thread_id | Number | Yes, this or `comment_id` or `message_id` | The id of the thread |
| comment_id | Number | Yes, this or `thread_id` or `message_id` | The id of the comment |
| message_id | Number | Yes, this or `thread_id` or `comment_id` | The id of the conversation message |

### Return value

A reaction object is returned.


## Add a reaction

> Example:

```shell
curl https://api.twistapp.com/api/v2/reactions/add \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d reaction="👍"
  -d comment_id=206113
```

`POST /api/v2/reactions/add`

Adds a reaction to a thread, comment or conversation message.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| reaction | String | Yes | The reaction to add |
| thread_id | Number | Yes, this or `comment_id` or `message_id` | The id of the thread |
| comment_id | Number | Yes, this or `thread_id` or `message_id` | The id of the comment |
| message_id | Number | Yes, this or `thread_id` or `comment_id` | The id of the conversation message |

> Return value:

```json
{
   "status": "ok"
}
```


## Remove a reaction

> Example:

```shell
curl https://api.twistapp.com/api/v2/reactions/remove \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d reaction="👍"
  -d comment_id=206113
```

`POST /api/v2/reactions/remove`

Removes a reaction from thread, comment or conversation message.

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| reaction | String | Yes | The reaction to remove |
| thread_id | Number | Yes, this or `comment_id` or `message_id` | The id of the thread |
| comment_id | Number | Yes, this or `thread_id` or `message_id` | The id of the comment |
| message_id | Number | Yes, this or `thread_id` or `comment_id` | The id of the conversation message |

> Return value:

```json
{
   "status": "ok"
}
```
