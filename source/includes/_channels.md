# Channels

A channel is a topic of discussion between a number of users.

> Channel object:

```json
{
	 "id" : 6984,
	 "name" : "Channel1",
	 "description" : "",
	 "creator" : 10073,
	 "user_ids" : [
			2601,
			10073,
			10076
	 ],
	 "color" : 1,
	 "public" : true,
	 "workspace_id" : 5517,
	 "archived" : false
	 "created_ts" : 1494323074,
}
```

### Properties of channel object

| Name | Type | Description |
| ---- | --- | --- |
| id | Number | The id of the channel |
| name | String | The name of the channel |
| description | String | The description of the channel |
| creator | Number | The user that created the channel |
| user_ids | Array of Numbers | The users that will participate in the channel |
| color | Number | The color of the channel |
| public | Boolean | If enabled, the channel will be marked as public |
| workspace_id | Number | The id of the workspace |
| archived | Boolean | Whether the channel is archived |
| created_ts | Number | The Unix time when the channel was created |


## Get channel

> Example:

```shell
curl https://api.twistapp.com/api/v2/channels/getone \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=6984
```

`GET /api/v2/channels/getone`

Gets a single channel object by id.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the channel |

### Return value

A channel object is returned.


## Get all channels

> Example:

```shell
curl https://api.twistapp.com/api/v2/channels/get \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d workspace_id=5517
```

`GET /api/v2/channels/get`

Gets all channels in a workspace.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| workspace_id | Number | Yes | The id of the workspace |
| archived | Boolean | No | If enabled, only archived converations are returned. By default it's off. |

### Return value

A list of channel objects is returned.


## Add channel

> Example:

```shell
curl https://api.twistapp.com/api/v2/channels/add \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d workspace_id=5517 \
  -d name=Channel1
```

`POST /api/v2/channels/add`

Adds a new channel.

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| workspace_id | Number | Yes | The id of the workspace |
| name | String | Yes | The name of the new channel |
| temp_id | Number | No | The temporary id of the channel |
| user_ids | Array of Numbers | No | The users that will participate in the channel |
| color | Number | No | The color of the channel |
| public | Boolean | No | If enabled, the channel will be marked as public |
| description | String | No | The description of the channel |

### Return value

A channel object is returned.


## Update channel

> Example:

```shell
curl https://api.twistapp.com/api/v2/channels/update \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=6984 \
  -d name=Channel1
```

`POST /api/v2/channels/update`

Updates an existing channel.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the channel |
| name | String | Yes | The name of the new channel |
| color | Number | No | The color of the channel |
| public | Boolean | No | If enabled, the channel will be marked as public |
| description | String | No | The description of the channel |

### Return value

The updated channel object is returned.


## Remove channel

> Example:

```shell
curl https://api.twistapp.com/api/v2/channels/remove \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=6984
```

`POST /api/v2/channels/remove`

Removes a channel. Requires for the channel to be archived first.

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the channel |

### Return value

```json
{
   "status": "ok"
}
```


## Archive channel

> Example:

```shell
curl https://api.twistapp.com/api/v2/channels/archive \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=6984
```

`POST /api/v2/channels/archive`

> Return value:

```json
{
   "status": "ok"
}
```

Archives a channel.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the channel |



## Unarchive channel

> Example:

```shell
curl https://api.twistapp.com/api/v2/channels/unarchive \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=6984
```

`POST /api/v2/channels/unarchive`

> Return value:

```json
{
   "status": "ok"
}
```

Unarchives a channel.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the channel |


## Add user

> Example:

```shell
curl https://api.twistapp.com/api/v2/channels/add_user \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=6984 \
  -d user_id=10076
```

`POST /api/v2/channels/add_user`

> Return value:

```json
{
   "status": "ok"
}
```

Adds a person to a channel.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the channel |
| user_id | Number | Yes | The user's id |


## Add users

> Example:

```shell
curl https://api.twistapp.com/api/v2/channels/add_users \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=6984 \
  -d user_ids='[10076]'
```

`POST /api/v2/channels/add_users`

> Return value:

```json
{
   "status": "ok"
}
```

Adds several persons to a channel.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the channel |
| user_ids | Array of Numbers | Yes | The ids of the users | 



## Remove user

> Example:

```shell
curl https://api.twistapp.com/api/v2/channels/remove_user \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=6984 \
  -d user_id=10076
```

`POST /api/v2/channels/remove_user`

> Return value:

```json
{
   "status": "ok"
}
```

Removes a person from a channel.

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the channel |
| user_id | Number | Yes | The user's id |



## Remove users

> Example:

```shell
curl https://api.twistapp.com/api/v2/channels/remove_users \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=6984 \
  -d user_ids='[10076]'
```

`POST /api/v2/channels/remove_users`

> Return value:

```json
{
   "status": "ok"
}
```

Removes several persons from a channel.

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the channel |
| user_ids | Array of Numbers | Yes | The ids of the users |
