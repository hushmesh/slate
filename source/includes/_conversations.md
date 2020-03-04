# Conversations

A conversation is a direct message exchange between one or more users.

> Conversation object:

```json
{
   "id" : 13037,
   "name" : "User2",
   "title" : null,
   "is_private" : 1
   "creator" : 10076,
   "workspace_id" : 5517,
   "user_ids" : [
      10073,
      10076
   ],
   "message_count" : 2,
   "last_obj_index" : 1,
   "snippet" : "Hello!",
   "snippet_creator" : 10076,
   "snippet_creators" : [
      10076,
      10073
   ],
   "last_active_ts" : 1497970961,
   "muted_until" : null,
   "archived" : 0,
   "created_ts" : 1494330846,
},
```

### Properties of conversation object

| Name | Type | Description |
| ---- | --- | --- |
| id | Number | The id of the conversation |
| name | String | The name of the other user or users or a title |
| title | String | The title of the conversation, or `null` if a private conversation |
| is_private | Number | Whether the conversation is private, ie. between 2 users only |
| creator | Number | The user that created the thread |
| workspace_id | Number | The id of the workspace |
| user_ids | Array of Numbers | The users that are participating in the conversation |
| message_count | Number | The number of messages |
| last_obj_index | Number | The last message's index |
| snippet | String | A part of the last comment |
| snippet_creator | Number | The user of the last comment |
| snippet_creators | Array of Numbers | The users of the last comments |
| last_active_ts | Number | The Unix time when the conversation was last active |
| muted_until |Number | The Unix time until when the conversation is muted |
| archived | Number | Whether the conversation is archived |
| created_ts | Number | The Unix time when the conversation was created |


## Get conversation

> Example:

```shell
curl https://api.twistapp.com/api/v2/conversations/getone \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=13037
```

`GET /api/v2/conversations/getone`

Gets a single conversation object.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the conversation |


### Return value

A conversation object is returned.


## Get all conversations

> Example:

```shell
curl https://api.twistapp.com/api/v2/conversations/get \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d workspace_id=5517
```

`GET /api/v2/conversations/get`

Gets all conversations of a user in a workspace.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| workspace_id | Number | Yes | The id of the workspace |
| limit | Number | No | Limits the number of conversations |
| newer_than_ts | Number | No | Limits conversations to those newer whan the specified Unix time |
| older_than_ts | Number | No | Limits conversations to those older whan the specified Unix time |
| order_by | String | No | The order of the comments returned one of `DESC` or `ASC` |
| archived | Boolean | No | If enabled, only archived converations are returned. By default it's off. |

### Return value

A list of conversation objects is returned.


## Get or create conversation

> Example:

```shell
curl https://api.twistapp.com/api/v2/conversations/get_or_create \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d workspace_id=5517 \
  -d user_ids='[10073,10076]'
```

`POST /api/v2/conversations/get_or_create`

Gets or creates a conversation with one or more users.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| workspace_id | Number | Yes | The id of the workspace |
| user_ids | Array of Numbers | Yes | The users that will participate in the conversation |

### Return value

A conversation object is returned.


## Update conversation

> Example:

```shell
curl https://api.twistapp.com/api/v2/conversations/update \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=13037 \
  -d title=Title1
```

`POST /api/v2/conversations/update`

Updates an existing conversation.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the conversation |
| title | String | Yes | The title of the conversation |
| archived | Boolean | No | If enabled, the conversation is marked as archived |

### Return value

A conversation object is returned.


## Add user

> Example:

```shell
curl https://api.twistapp.com/api/v2/conversations/add_user \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=13037 \
  -d user_id=10076
```

`POST /api/v2/conversations/add_user`

Adds a person to a conversation.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the conversation |
| user_id | Number | Yes | The user's id |

> Return value:

```json
{
   "status": "ok"
}
```


## Add users

> Example:

```shell
curl https://api.twistapp.com/api/v2/conversations/add_users \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=13037 \
  -d user_ids='[10076]'
```

`POST /api/v2/conversations/add_users`

Adds several persons to a conversation.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the conversation |
| user_ids | Array of Numbers | Yes | The ids of the users |

> Return value:

```json
{
   "status": "ok"
}
```


## Remove user

> Example:

```shell
curl https://api.twistapp.com/api/v2/conversations/remove_user \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=13037 \
  -d user_id=10076
```

`GET /api/v2/conversations/remove_user`

Removes a person from a conversation.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the conversation |
| user_id | Number | Yes | The user's id |

> Return value:

```json
{
   "status": "ok"
}
```


## Remove users

> Example:

```shell
curl https://api.twistapp.com/api/v2/conversations/remove_users \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=13037 \
  -d user_ids='[10076]'
```

`GET /api/v2/conversations/remove_users`

Removes several persons from a conversation.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the conversation |
| user_ids | Array of Numbers | Yes | The ids of the users |

> Return value:

```json
{
   "status": "ok"
}
```


## Archive conversation

> Example:

```shell
curl https://api.twistapp.com/api/v2/conversations/archive \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=13037
```

`POST /api/v2/conversations/archive`

Archives a conversation.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the conversation |

> Return value:

```json
{
   "status": "ok"
}
```


## Unarchive conversation

> Example:

```shell
curl https://api.twistapp.com/api/v2/conversations/unarchive \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=13037
```

`POST /api/v2/conversations/unarchive`

Unarchives a conversation.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the conversation |

> Return value:

```json
{
   "status": "ok"
}
```


## Get unread conversations

> Example:

```shell
curl https://api.twistapp.com/api/v2/conversations/get_unread \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=5517
```

`GET /api/v2/conversations/get_unread`

Gets unread conversations.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| workspace_id | Number | Yes | The id of the workspace |

> Return value:

```json
[
   [
      13037,
      1
   ]
]
```

### Return value

A list of unread conversations objects that are unread, where each unread conversation object is an array with two values: the conversation id and the id of last unread message.


## Mark conversation as read

> Example:

```shell
curl https://api.twistapp.com/api/v2/conversations/mark_read \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d conversation_id=13037 \
  -d messsage_id=1
```

`POST /api/v2/conversations/mark_read`

Marks a conversation as read.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| conversation_id | Number | Yes | The id of the conversation |
| obj_index | Number | Yes, this or `message_id` | The index of the message, which will become the last read message in the conversation |
| message_id | Number | Yes, this or `obj_index` | The id of the message, which will become the last read message in the conversation |

> Return value:

```json
{
   "status": "ok"
}
```


## Mark conversation as unread

> Example:

```shell
curl https://api.twistapp.com/api/v2/conversations/mark_unread \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d conversation_id=13037 \
  -d messsage_id=1
```

`POST /api/v2/conversations/mark_unread`

Marks a conversation as unread.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| conversation_id | Number | Yes | The id of the conversation |
| obj_index | Number | Yes, this or `message_id` | The index of the message, which will become the last unread message in the conversation |
| message_id | Number | Yes, this or `obj_index` | The id of the message, which will become the last unread message in the conversation |

> Return value:

```json
{
   "status": "ok"
}
```

## Mute conversation

> Example:

```shell
curl https://api.twistapp.com/api/v2/conversations/mute \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=13037 \
  -d minutes=30
```

`POST /api/v2/conversations/mute`

Mutes a conversation for a number of minutes.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the conversation |
| minutes | Number | Yes | The number of minutes to mute the conversation |

### Return value

A conversation object is returned.


## Unmute conversation

> Example:

```shell
curl https://api.twistapp.com/api/v2/conversations/unmute \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d id=13037
```

`POST /api/v2/conversations/unmute`

Unmutes a conversation.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the conversation |

### Return value

A conversation object is returned.

