# Users

A user represents a real person who collaborates with other users.

> User object:

```json
{
   "id" : 10073,
   "token" : "9b1bf97783c1ad5593dee12f3019079dbd3042cf",
   "email" : "user@example.com",
   "name" : "User",
   "short_name" : "User",
   "avatar_id" : "c5f14f4da3ee2479a26c65c630c21765",
   "default_workspace" : 5517,
   "profession" : "",
   "contact_info" : "",
   "timezone" : "UTC",
   "snooze_until" : -1,
   "snooze_dnd_start" : null,
   "snooze_dnd_end" : null,
   "is_snoozed" : false,
   "away_mode" : null
   "off_days" : [],
   "setup_pending" : 0,
   "is_bot" : false,
   "client_id" : "9ea8c3de-349e-11e7-976e-06b24c4507db",
   "comet_server" : "https://comet.twistapp.com",
   "comet_channel" : "10073-15c9c64dae211c526c77164d31dd5b6e9eabcdda",
}
```

### Properties of user object

| Name | Type | Description |
| --- | --- | --- |
| id | Number | The id of the user |
| token | String | The user's API token |
| email | String | The user's email |
| name | String | The user's full name |
| short_name | String | The user's short name |
| avatar_id | String | The user's avatar id |
| default_workspace | Number | The user's default workspace |
| profession | String | The user's profession |
| contact_info | String | The user's contact info |
| timezone | String | The user's timezone |
| snooze_until | Number | Snooze notifications for the specified number of seconds |
| snooze_dnd_start | String | Start time of do-not-disturb snooze for notifications |
| snooze_dnd_stop | String | Stop time of do-not-disturb snooze for notifications |
| is_snoozed | Boolean | Whether notifications are snoozed |
| away_mode | Object | Away mode sets the user as away until some future date |
| away_mode.type | String | The reason of being in away mode one of `parental`, `vacation`, `sickleave`, or `other` |
| away_mode.date_from | String | The start date of the away mode in a `%Y-%m-%d` format (optional) |
| away_mode.date_to | String | The end date of the away mode in a `%Y-%m-%d` format |
| off_days | Array of numbers | Sets the user's off days (where they will get no notifications). It should be an array of numbers representing ISO weekdays, e.g. 1 is Monday and 7 is Sunday. E.g. `[6, 7]` |
| setup_pending | Number/Boolean | Whether setup is pending |
| is_bot | Boolean | Whether user is a bot |
| comet_server | String | The comet server |
| comet_channel | String | The comet channel |


## Get one

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/getone \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d id=10073
```

`GET /api/v2/users/getone`

Gets info about a user.

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id | Number | Yes | The id of the user |

### Return value

The user object.


## Login

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/login \
  -d email=user@example.com \
  -d password=secret
```

`POST /api/v2/users/login`

Logs in existing user.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| email | String | Yes | The user's email |
| password | String | Yes | The user's password |
| set_session_cookie | Boolean | No | By default, a session cookie is set for the user |

### Return value

The user object.


## Log out

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/logout
```

`POST /api/v2/users/logout`

> Return value:

```json
{
   "status": "ok"
}
```

Logs out user, and resets the session.


## Register

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/register \
  -d name=User \
  -d email=user@example.com \
  -d password=secret
```

`POST /api/v2/users/register`

Register a new user.

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| name | String | Yes | The user's full name |
| email | String | Yes | The user's email |
| password | String | Yes | The user's password |

### Return value

The user object.


## Update

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/update \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d name=User
```

`POST /api/v2/users/update`

Updates user's details.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| name | String | No | The user's full name |
| email | String | No | The user's email |
| password | String | No | The user's password |
| default_workspace | Number | No | The user's default workspace |
| profession | String | No | The user's profession |
| contact_info | String | No | The user's contact info |
| timezone | String | No | The user's timezone |
| snooze_until | Number | No | Snooze notifications for the specified number of seconds |
| snooze_dnd_start | String | No | Start time of do-not-disturb snooze for notifications |
| snooze_dnd_stop | String | No | Stop time of do-not-disturb snooze for notifications |
| away_mode | Object | No | Away mode sets the user as away until some future date |
| away_mode\#type | String | No | The reason of being in away mode one of `parental`, `vacation`, `sickleave`, or `other` |
| away_mode\#date_from | String | No | The start date of the away mode in a `%Y-%m-%d` format (optional) |
| away_mode\#date_to | String | No | The end date of the away mode in a `%Y-%m-%d` format |
| off_days | Array of numbers | No | Sets the user's off days (where they will get no notifications). It should be an array of numbers representing ISO weekdays, e.g. 1 is Monday and 7 is Sunday. E.g. `[6, 7]` |

### Return value

The updated user object is returned.


## Update password

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/update_password \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d current_password=secret \
  -d new_password=newsecret
```

`POST /api/v2/users/update_password`

Updates user's password.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| current_password | String | Yes | The user's current password |
| new_password | String | Yes | The user's new password |

### Return value

The user object is returned.


## Update avatar

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/update_avatar \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -F image=@avatar.jpg
```

`POST /api/v2/users/update_avatar`

Updates user's avatar.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| image | String | Yes | The file name of the image to upload |

### Return value

The updated user object is returned.


## Invalidate token

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/invalidate_token \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
```

`POST /api/v2/users/invalidate_token`

Invalidates API token and generates a new token for the user.

### Return value

The user object is returned, which also includes the new token.


## Validate token

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/validate_token \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
```

`POST /api/v2/users/validate_token`

> Return value:

```json
{
   "status": "ok"
}
```

Validates the user token.


## Set presence

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/heartbeat \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d workspace_id=5517 \
  -d platform=api
```

`POST /api/v2/users/heartbeat`

> Return value:

```json
{
   "status": "ok"
}
```

Marks user as active on workspace.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| workspace_id | Number | Yes | The id of the workspace |
| platform | String | Yes | The platform can be one of `mobile`, `desktop` or `api` |


## Reset presence

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/reset_presense \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d workspace_id=5517
```

`POST /api/v2/users/reset_presense`

> Return value:

```json
{
   "status": "ok"
}
```
Marks user as inactive on workspace.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| workspace_id | Number | Yes | The id of the workspace |


## Reset password

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/reset_password \
  -d email=user@example.com
```

`POST /api/v2/users/reset_password`

> Return value:

```json
{
   "status": "ok"
}
```

Sends an email to reset the user's password.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| email | String | Yes | The user's email |


## Set password based on reset code

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/set_password \
  -d reset_code=12345abcef
  -d new_password=newsecret
```

`POST /api/v2/users/set_password`

Sets the user password based on a reset code.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| reset_code | String | Yes | The reset code sent via email |
| new_password | String | Yes | The user's new password |

### Return value

The updated user object is returned.


## Login with Google

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/login_with_google \
  -d access_token=ya29.AHES6ZRKeUQwH2xhirksSUDSyjg9oPuRMMal05Ty0cfFIT_uRfESHw
```

`POST /api/v2/users/login_with_google`

Logs in user with a Google account.

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id_token | String | Yes, this or `access_token` | The Google Sign-In ID token |
| access_token | String | Yes, this or `id_token` | The Google OAuth2 token |

### Return value

The user object is returned.


## Register with Google

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/register_with_google \
  -d access_token=ya29.AHES6ZRKeUQwH2xhirksSUDSyjg9oPuRMMal05Ty0cfFIT_uRfESHw
```

`POST /api/v2/users/register_with_google`

Registers new user with a Google account.

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id_token | String | Yes, this or `access_token` | The Google Sign-In ID token |
| access_token | String | Yes, this or `id_token` | The Google OAuth2 token |

### Return value

The user object.


## Connect with Google

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/connect_with_google \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d access_token=ya29.AHES6ZRKeUQwH2xhirksSUDSyjg9oPuRMMal05Ty0cfFIT_uRfESHw
```

`POST /api/v2/users/connect_with_google`

> Return value:

```json
{
   "status": "ok"
}
```

Connects user's account to a Google account.

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| id_token | String | Yes, this or `access_token` | The Google Sign-In ID token |
| access_token | String | Yes, this or `id_token` | The Google OAuth2 token |


## Check Google connection

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/is_connected_to_google \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
```

`GET /api/v2/users/is_connected_to_google`

> Return value:

```json
{
   "google_connection": true
}
```

Checks whether user's account is connected to a Google account.


## Disconnect from Google

> Example:

```shell
curl https://api.twistapp.com/api/v2/users/disconnect_google \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
```

`POST /api/v2/users/disconnect_google`

> Return value:

```json
{
   "status": "ok"
}
```

Disconnects user's account from Google account.
