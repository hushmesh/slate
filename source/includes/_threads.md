# Threads

A thread is a discussion.

> Thread object:

```json
{
	 "id" : 32038,
	 "title" : "Thread1",
	 "content" : "Let's discuss the Twist API...",
	 "is_starred" : 0
	 "creator" : 10073,
	 "channel_id" : 6984,
	 "workspace_id" : 5517,
	 "attachments" : []
	 "participants" : [
			10073,
			10076
	 ],
	 "recipients" : [
			10076
	 ],
	 "groups" : [],
	 "reactions" : {},
	 "comment_count" : 3,
	 "last_obj_index" : 2,
	 "snippet" : "OK!",
	 "snippet_creator" : 10073,
	 "last_updated" : "2017-05-11 11:05:13",
	 "last_updated_ts" : 1494500713,
	 "system_message" : null,
	 "posted_ts" : 1494488709,
}
```

### Properties of thread object

| Name | Type | Description |
| ---- | --- | --- |
| id | Number | The id of the thread |
| title | String | The title of the thread |
| content | String | The content of the thread |
| is_starred | Number | Whether the thread is starred |
| creator | Number | The user that created the thread |
| channel_id | Number | The id of the channel |
| workspace_id | Number | The id of the workspace |
| attachments | Array of Objects | Files attached to the comment |
| recipients | Array of Numbers or String | The users that were initially attached to the the thread, or `EVERYONE` |
| participants | Array of Numbers | The users that were at some point attached to the thread or one of its comments |
| groups | Array of Numbers | The groups that will be notified |
| reactions | Object | Reactions to the thread, where keys are the reactions and values the users that had that reaction |
| comment_count | Number | The number of comments |
| last_obj_index | Number | The last comment's index |
| snippet | String | A part of the last comment |
| snippet_creator | Number | The user of the last comment |
| last_updated | String | The date and time when the thread was last updated |
| last_updated_ts | Number | The Unix time when the thread was last updated |
| system_message | String | A system message |
| posted_ts | Number | The Unix time when the thread was created |


## Get thread

> Example:

```shell
curl https://api.twistapp.com/api/v2/threads/getone \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=32038
```

`GET /api/v2/threads/getone`

Gets a thread object by id.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the thread |

### Return value

A thread object is returned.


## Get all threads

> Example:

```shell
curl https://api.twistapp.com/api/v2/threads/get \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d channel_id=6984
```

`GET /api/v2/threads/get`

Gets all threads in a channel.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| channel_id | Number | No | The id of the channel |
| workspace_id | Number | No | The id of the workspace |
| filter_by | String | No | A filter can be one of `attached_to_me`, `everyone` and `is_starred` |
| newer_than_ts | Number | No | Limits threads to those newer whan the specified Unix time |
| older_than_ts | Number | No | Limits threads to those older whan the specified Unix time |
| limit | Number | No | Limits the number of threads returned |
| as_ids | Boolean | No | If enabled, only the ids of the threads are returned |

### Return value

A list of thread objects is returned.


## Add thread

> Example:

```shell
curl https://api.twistapp.com/api/v2/threads/add \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d channel_id=6984 \
  -d name=Thread1
```

`POST /api/v2/threads/add`

Adds a new thread to a channel.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| channel_id | Number | Yes | The id of the channel |
| title | String | Yes | The title of the new thread |
| content | String | Yes | The content of the new thread |
| attachments | Array of Objects | No | Files to attach to comment |
| recipients | Array of Numbers or String | No | The users that will be attached to the thread, or `EVERYONE` |
| groups | Array of Numbers | No | The groups that will be notified |
| temp_id | Number | No | The temporary id of the thread |
| send_as_integration | Boolean | No | Displays the integration as the thread creator |

### Return value

A thread object is returned.


## Update thread

> Example:

```shell
curl -X POST https://api.twistapp.com/api/v2/threads/update \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=32038 \
  -d title=Thread1
``

`POST /api/v2/threads/update`

Updates an existing thread.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the thread |
| title | String | No | The title of the thread |
| content | String | No | The content of the thread |
| attachments | Array of Objects | No | Files to attach to comment |

### Return value

The updated thread object is returned.


## Remove thread

> Example:

```shell
curl https://api.twistapp.com/api/v2/threads/remove \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=32038
```


`POST /api/v2/threads/remove`

Removes a thread.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the thread |

### Return value

```json
{
   "status": "ok"
}
```


## Star thread

> Example:

```shell
curl https://api.twistapp.com/api/v2/threads/star \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=32038
```

`POST /api/v2/threads/star`

Stars a thread.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the thread |

> Return value:

```json
{
   "status": "ok"
}
```


## Unstar thread

> Example:

```shell
curl https://api.twistapp.com/api/v2/threads/unstar \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=32038
```

`POST /api/v2/threads/unstar`

Unstars a thread.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the thread |

> Return value:

```json
{
   "status": "ok"
}
```


## Move thread

> Example:

```shell
curl https://api.twistapp.com/api/v2/threads/move_to_channel \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=6984 \
  -d to_channel=6984
```

`POST /api/v2/threads/move_to_channel`

Moves thread to a different channel.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the thread |
| to_channel | Number | Yes | The target channel's id |

> Return value:

```json
{
   "status": "ok"
}
```


## Follow thread

> Example:

```shell
curl https://api.twistapp.com/api/v2/threads/follow \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=32038
```

`POST /api/v2/threads/follow`

Follows thread.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the thread |

> Return value:

```json
{
   "status": "ok"
}
```


## Unfollow thread

> Example:

```shell
curl https://api.twistapp.com/api/v2/threads/unfollow \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=32038
```

`POST /api/v2/threads/unfollow`

Unfollows thread.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the thread |

> Return value:

```json
{
   "status": "ok"
}
```


## Get unread threads

> Example:

```shell
curl https://api.twistapp.com/api/v2/threads/get_unread \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d workspace_id=5517
```

`GET /api/v2/threads/get_unread`

Gets unread threads in a workspace.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| workspace_id | Number | Yes | The id of the workspace |

### Return value

A list of thread objects is returned.


## Mark thread as read

> Example:

```shell
curl https://api.twistapp.com/api/v2/threads/mark_read \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=32038 \
  -d obj_index=2
```

`POST /api/v2/threads/mark_read`

Marks thread as read.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the thread |
| obj_index | Number | Yes | The index of the last known read message |

> Return value:

```json
{
   "status": "ok"
}
```


## Mark thread as unread

> Example:

```shell
curl https://api.twistapp.com/api/v2/threads/mark_unread \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=32038 \
  -d obj_index=2
```

`POST /api/v2/threads/mark_unread`

Marks thread as unread.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the thread |
| obj_index | Number | Yes | The index of the last unread message |

> Return value:

```json
{
   "status": "ok"
}
```


## Mark all threads as read

> Example:

```shell
curl https://api.twistapp.com/api/v2/threads/mark_all_read \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d channel_id=6984
```

`POST /api/v2/threads/mark_all_read`

Marks all thread in workspace or channel as read.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| workspace_id | Number | Yes, this or `channel_id` | The id of the workspace |
| channel_id | Number | Yes, this or `workspace_id` | The id of the channel |

> Return value:

```json
{
   "status": "ok"
}
```


## Clear unread threads

> Example:

```shell
curl https://api.twistapp.com/api/v2/threads/clear_unread \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d workspace_id=5517
```

`POST /api/v2/threads/clear_unread`

Clears unread threads in workspace.

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
