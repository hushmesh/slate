# Workspaces

A workspace is a shared place between different users. In the Twist UI they are usually called teams.

> Workspace object:

```json
{
   "id" : 5517,
   "name" : "Workspace1",
   "color" : 1
   "default_channel" : 6984,
   "default_conversation" : 13030,
   "creator" : 10073,
   "created_ts" : 1494323073,
   "users" : [
      {
         "is_removed" : 0,
         "away_mode" : null,
         "snooze_until" : -1,
         "snooze_dnd_end" : null,
         "short_name" : "Ada Bot",
         "setup_pending" : 0,
         "is_doist_employee" : 0,
         "email" : "ada@twistapp.com",
         "id" : 2601,
         "is_bot" : 1,
         "timezone" : "Europe/Lisbon",
         "off_days" : [],
         "contact_info" : "",
         "user_type" : "USER",
         "profession" : "Bot, at your service",
         "avatar_id" : "dc6ed0e255968188ea48d00815f95eb3",
         "snooze_dnd_start" : null,
         "last_active" : null,
         "name" : "Ada Bot",
         "default_workspace" : null
      },
      {
         "timezone" : "UTC",
         "is_bot" : 0,
         "id" : 10073,
         "off_days" : [],
         "contact_info" : "",
         "user_type" : "ADMIN",
         "avatar_id" : "c5f14f4da3ee2479a26c65c630c21765",
         "profession" : "",
         "name" : "User",
         "default_workspace" : null,
         "snooze_dnd_start" : null,
         "last_active" : null,
         "snooze_until" : -1,
         "is_removed" : 0,
         "away_mode" : null,
         "snooze_dnd_end" : null,
         "short_name" : "User",
         "setup_pending" : 0,
         "is_doist_employee" : 0,
         "email" : "user1@example.com"
      }
   ],
}
```

### Properties of workspace object

| Name | Type | Description |
| --- | --- | --- |
| id | Number | The id of the workspace |
| name | String | The name of the new workspace |
| color | Number | The color of the workspace |
| default_channel | Number | The id of the default channel |
| default_conversation | Number | The id of the default conversation |
| creator | Number | The id of the user that created the workspace |
| created_ts | Number | The Unix time when the workspace was created |
| users | Array of Objects | The users that belong to the workspace |


> Workspace user object:

```json
"user" : {
   "id" : 10073
   "email" : "user1@example.com",
   "name" : "User1",
   "short_name" : "User1",
   "avatar_id" : "c5f14f4da3ee2479a26c65c630c21765",
   "default_workspace" : null,
   "profession" : "",
   "contact_info" : "",
   "timezone" : "UTC",
   "snooze_until" : -1,
   "snooze_dnd_start" : null,
   "snooze_dnd_end" : null,
   "away_mode" : null,
   "off_days" : [],
   "setup_pending" : 0,
   "is_bot" : 0,
   "user_type" : "ADMIN",
   "is_removed" : 0,
   "is_doist_employee" : 0,
   "last_active" : null,
}
```

### Properties of workspace user object

| Name | Type | Description |
| --- | --- | --- |
| user_type | String | The user type, one of `ADMIN`, `USER` or `GUEST` |
| is_removed | Boolean | Whether the user has been removed |
| is_doist_employee | Boolean | Whether the user is a Doist employee |
| last_active | String | The date and time when the user was last active |


> Workspace user activity object:

```json
{
   "is_active" : false,
   "latest_activity" : [
      "api",
      1494333950
   ]
   "activity" : {
      "mobile" : -1,
      "email" : -1,
      "api" : 1494333950,
      "desktop" : 1494324167
   },
   "local_time" : "\"2017-05-10 07:55:40\"",
   "user": { ... }
}
```

### Properties of workspace user activity object

| Name | Type | Description |
| --- | --- | --- |
| is_active | Boolean | Whether the user is active at the moment |
| latest_activity | Array | The user's last activity |
| latest_activity[0] | String | The user's last activity platform |
| latest_activity | Number | The user's last activity Unix timestamp |
| activity | Object | The Unix timestamp of last activity for each platform |
| activity["mobile"] | Number | The last activity on the mobile platform |
| activity["email"] | Number | The last activity on the email platform |
| activity["api"] | Number | The last activity on the api platform |
| activity["desktop"] | Number | The last activity on the desktop platform |
| local_time | String | The user's current time in UTC |
| user | Object | The workspace user object (see above) |


## Get workspace

> Example:

```shell
curl https://api.twistapp.com/api/v2/workspaces/getone \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=5517
```

`GET /api/v2/workspaces/getone`

Gets a single workspace object by id.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the workspace |

### Return value

A workspace object is returned.


## Get default workspace

> Example:

```shell
curl https://api.twistapp.com/api/v2/workspaces/get_default \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
```

`GET /api/v2/workspaces/get_default`

Gets the user's default workspace.

### Return value

A workspace object is returned.


## Get all workspaces

> Example:

```shell
curl https://api.twistapp.com/api/v2/workspaces/get \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
```

`GET /api/v2/workspaces/get`

Gets all the user's workspaces.

### Return value

A list of workspace objects is returned.


## Add workspace

> Example:

```shell
curl https://api.twistapp.com/api/v2/workspaces/add \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d name=Workspace1
```

`POST /api/v2/workspaces/add`

Creates a new workspace.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| name | String | Yes | The name of the new workspace |
| temp_id | Number | No | The temporary id of the workspace |
| color | Number | No | The color of the workspace |

### Return value

A workspace object is returned.


## Update workspace

> Example:

```shell
curl https://api.twistapp.com/api/v2/workspaces/update \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d name=Workspace1
```

`POST /api/v2/workspaces/update`

Updates an existing workspace.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the workspace |
| name | String | No | The name of the workspace |
| color | Number | No | The color of the workspace |

### Return value

The updated workspace object is returned.



## Remove workspace

> Example:

```shell
curl https://api.twistapp.com/api/v2/workspaces/remove \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=5517
  -d current_password=secret
```

`POST /api/v2/workspaces/remove`

> Return value:

```json
{
   "status": "ok"
}
```
Removes a workspace and all its data \(not recoverable\).

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the workspace |
| current_password | String | Yes | The user's current password |


## Add user

> Example:

```shell
curl https://api.twistapp.com/api/v2/workspaces/add_user \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=5517
  -d email=user2@example.com
```

`POST /api/v2/workspaces/add_user`

Adds a person to a workspace.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the workspace |
| email | String | Yes | The user's email |

### Return value

A workspace user object is returned.


## Resend invite 

> Example:

```shell
curl https://api.twistapp.com/api/v2/workspaces/resend_invite \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=5517
  -d email=user2@example.com
```

`POST /api/v2/workspaces/resend_invite`

> Return value:

```json
{"status": "ok"}
```

Adds a person to a workspace.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the workspace |
| email | String | Yes | The user's email |


## Update user

> Example:

```shell
curl https://api.twistapp.com/api/v2/workspaces/update_user \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=5517
  -d email=user2@example.com
  -d user_type=USER
```

`POST /api/v2/workspaces/update_user`

Updates a person in a workspace.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the workspace |
| email | String | Yes | The user's email |
| user_type | String | Yes | The user's type one of `USER`, `ADMIN` or `GUEST` |

### Return value

The updated workspace user object is returned.


## Remove user

> Example:

```shell
curl https://api.twistapp.com/api/v2/workspaces/update_user \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=5517
  -d email=user2@example.com
```

`POST /api/v2/workspaces/remove_user`

> Return value:

```json
{
   "status": "ok"
}
```

Removes a person from a workspace.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the workspace |
| email | String | Yes | The user's email |


## Get user by email

> Example:

```shell
curl https://api.twistapp.com/api/v2/workspaces/get_user_by_email \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=5517
  -d email=user2@example.com
```

`GET /api/v2/workspaces/get_user_by_email`

Gets user by email.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the workspace |
| email | String | Yes | The user's email |

### Return value

A workspace user object is returned.


## Get user by id

> Example:

```shell
curl https://api.twistapp.com/api/v2/workspaces/get_user_by_id \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=5517
  -d user_id=10073
```

`GET /api/v2/workspaces/get_user_by_id`

Gets user by id.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the workspace |
| user_id | Number | Yes | The user's id |

### Return value

A workspace user object is returned.


## Get user info

> Example:

```shell
curl https://api.twistapp.com/api/v2/workspaces/get_user_info \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=5517
  -d user_id=10073
```

`GET /api/v2/workspaces/get_user_info` 

Gets user's info in the context of the workspace.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the workspace |
| user_id | Number | Yes | The user's id |


## Get local time of user

> Example:

```shell
curl https://api.twistapp.com/api/v2/workspaces/get_user_local_time \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=5517
  -d user_id=10073
```

`GET /api/v2/workspaces/get_user_local_time`

> Return value:

```json
"2017-05-10 07:55:40"
```

Gets user's local time.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the workspace |
| user_id | Number | Yes | The user's id |


## Get public channels

> Example:

```shell
curl https://api.twistapp.com/api/v2/workspaces/get_public_channels \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=5517
```

`GET /api/v2/workspaces/get_public_channels`

Gets public channels of workspace.

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the workspace |

### Return value

A list of channel objects is returned.
