# Comments

A comment is a message in a thread.

> Comment object:

```json
{
   "id" : 206113,
   "content" : "OK!",
   "creator" : 10076,
   "thread_id" : 32038,
   "channel_id" : 6984,
   "workspace_id" : 5517
   "obj_index" : 2,
   "attachments" : [],
   "recipients" : [
      10073
   ],
   "groups" : [],
   "reactions" : {
      "👍" : [
         10076
      ]
   },
   "is_deleted" : false,
   "system_message" : null,
   "posted_ts" : 1494489787,
}
```

### Properties of comment object

| Name | Type | Description |
| ---- | --- | --- |
| id | Number | The id of the comment |
| content | String | The content of the new comment |
| creator | Number | The user that added the comment |
| thread_id | Number | The id of the thread |
| channel_id | Number | The id of the channel |
| workspace_id | Number | The id of the workspace |
| attachments | Array of Objects | Files to attach to comment |
| recipients | Array of Numbers or String | The users that will be notified, or `EVERYONE` or `EVERYONE_IN_THREAD` |
| groups | Array of Numbers | The groups that will be notified |
| reactions | Object | Reactions to the thread, where keys are the reactions and values the users that had that reaction |
| is_deleted | Number | Whether the thread is deleted |
| system_message | String | A system message |
| posted_ts | Number | The Unix time when the thread was created |


## Get comment

> Example:

```shell
curl https://api.twistapp.com/api/v2/comments/getone \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=206113
```

`GET /api/v2/comments/getone`

Gets a single comment object by id.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the comment |

### Return value

A comment object is returned.


## Get all comments

> Example:

```shell
curl https://api.twistapp.com/api/v2/comments/get \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d thread_id=32038
```

`GET /api/v2/comments/get`

Gets all comments in a channel.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| thread_id | Number | No | The id of the thread |
| newer_than_ts | String | No | Limit comments to those newer than the specified Unix timestamp |
| older_than_ts | String | No | Limit comments to those older than the specified Unix timestamp |
| from_obj_index | Number | No | Limit comments starting at the specified object index |
| to_obj_index | String | No | Limit comments ending at the specified object index |
| limit | Number | No | Limits the number of comments returned, by default `20` |
| order_by | String | No | The order of the comments returned one of `DESC` or `ASC` |
| as_ids | Boolean | No | If enabled, only the ids of the comments are returned |

### Return value

A list of comment objects is returned.


## Add comment

> Example:

```shell
curl https://api.twistapp.com/api/v2/comments/add \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d thread_id=32038 \
  -d content="OK!"
```

`POST /api/v2/comments/add`

Adds a new comment to a thread.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| thread_id | Number | Yes | The id of the thread |
| content | String | Yes | The content of the new comment |
| attachments | Array of Objects | No | Files to attach to comment |
| recipients | Array of Numbers or String | No | The users that will be notified, or `EVERYONE` or `EVERYONE_IN_THREAD` |
| groups | Array of Numbers | No | The groups that will be notified |
| temp_id | Number | No | The temporary id of the comment |
| mark_thread_position | Boolean | No | By default, the position of the thread is marked |
| send_as_integration | Boolean | No | Displays the integration as the comment creator |

### Return value

A comment object is returned.


## Update comment

> Example:

```shell
curl https://api.twistapp.com/api/v2/comments/update \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=206113 \
  -d content="OK!"
```

`POST /api/v2/comments/update`

Updates an existing comment.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the comment |
| content | String | No | The content of the comment |
| attachments | Array of Objects | No | Files to attach to comment |

### Return value

A comment object is returned.


## Remove comment

> Example:

```shell
curl https://api.twistapp.com/api/v2/comments/remove \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=206113
```

`POST /api/v2/comments/remove`

Removes a comment \(only user's own comments can be removed\).

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the comment |

> Return value:

```json
{
   "status": "ok"
}
```

## Mark position

> Example:

```shell
curl https://api.twistapp.com/api/v2/comments/mark_position \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d thread_id=32038 \
	-d comment_id=206113
```

`POST /api/v2/comments/mark_position`

Marks the position of a thread.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| thread_id | Number | Yes | The id of the thread |
| comment_id | Number | Yes | The id of the comment |

> Return value:

```json
{
   "status": "ok"
}
```
