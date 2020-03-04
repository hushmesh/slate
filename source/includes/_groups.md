# Groups

A group is a number of users grouped together under some name, a team.

> Group object:

```json
{
   "id" : 498,
   "name" : "Group1"
   "description" : null,
   "user_ids" : [],
   "workspace_id" : 5517,
}
```

### Properties of group object

| Name | Type | Description |
| --- | --- | --- |
| id | Number | The id of the group |
| name | String | The name of the group |
| description | String | The description of the group |
| user_ids | Array of Numbers | The users that are part of the group |
| workspace_id | Number | The id of the workspace |


## Get group

> Example:

```shell
curl https://api.twistapp.com/api/v2/groups/getone \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=498
```

`GET /api/v2/groups/getone`

Gets a single group object.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the group |

### Return value

A group object is returned.


## Get all groups

> Example:

```shell
curl https://api.twistapp.com/api/v2/groups/get \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d workspace_id=5517
```

`GET /api/v2/groups/get`

Gets all groups in a workspace.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| workspace_id | Number | Yes | The id of the workspace |


### Return value

A list of group objects is returned.


## Add group

> Example:

```shell
curl https://api.twistapp.com/api/v2/groups/add \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d workspace_id=5571 \
  -d name=Group1 \
  -d user_ids='[10073]'
```

`POST /api/v2/groups/add`

Adds a new group to a workspace.

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| workspace_id | Number | Yes | The id of the workspace |
| name | String | Yes | The name of the new group |
| user_ids | Array of Numbers | No | The users that will comprise the group |

### Return value

A group object is returned.


## Update group

> Example:

```shell
curl https://api.twistapp.com/api/v2/groups/update \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=498 \
  -d name=Group1
```

`POST /api/v2/groups/update`

Updates an existing group.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the group |
| name | String | Yes | The name of the group |

### Return value

The updated group object is returned.


## Remove group

> Example:

```shell
curl https://api.twistapp.com/api/v2/groups/remove \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=498
```

`POST /api/v2/groups/remove`

> Return value:

```json
{
   "status": "ok"
}
```

Removes a group.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the group |


## Add user

> Example:

```shell
curl https://api.twistapp.com/api/v2/groups/add_user \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=498 \
  -d user_id=10076
```

`POST /api/v2/groups/add_user`

> Return value:

```json
{
   "status": "ok"
}
```

Adds a person to a group.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the group |
| user_id | Number | Yes | The user's id |


## Add users

> Example:

```shell
curl https://api.twistapp.com/api/v2/groups/add_users \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=498 \
  -d user_ids='[10073,10076]'
```

`POST /api/v2/groups/add_users`

> Return value:

```json
{
   "status": "ok"
}
```

Adds several persons to a group.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the group |
| user_ids | Array of Numbers | Yes | The ids of the users |


## Remove user

> Example:

```shell
curl https://api.twistapp.com/api/v2/groups/remove_user \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=498 \
  -d user_id=10076
```

`POST /api/v2/groups/remove_user`

> Return value:

```json
{
   "status": "ok"
}
```

Removes a person from a group.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the group |
| user_id | Number | Yes | The user's id |


## Remove users

> Example:

```shell
curl https://api.twistapp.com/api/v2/groups/remove_users \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=498 \
  -d user_ids='[10073,10076]'
```

`POST /api/v2/groups/remove_users`

> Return value:

```json
{
   "status": "ok"
}
```

Removes several persons from a group.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the group |
| user_ids | Array of Numbers | Yes | The ids of the users |


