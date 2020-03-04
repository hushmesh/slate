# Authentication

In order to make authorized calls to Twist APIs, your integration must first obtain an access token from the users. This section describes how to obtain such a token.

For testing purposes you can also use `/api/v2/users/login` and `/api/v2/users/login_with_google`, but please don’t use this for a public integration, since it’s highly insecure and can be abused.

## oAuth 2

Before getting started, you need to [create an oAuth 2 integration](https://twistapp.com/integrations/create) and configure a valid OAuth redirect URL. A registered Twist integration is assigned a unique Client ID and Client Secret which are needed for the OAuth2 flow.

This procedure is comprised of 3 steps, which will be described below.

All the error responses will be in JSON format, an example is `{"error": "BAD_REQUEST", "error_message": "Invalid scope"}`.


### Step 1: The authorization request

Redirect users to the authorization URL at the endpoint `https://twistapp.com/oauth/authorize`, with the specified request parameters.

Here follow the required parameters:

| Name | Description |
| --- | --- | 
| client_id | The unique Client ID of the Twist integration that you registered. |
| scope | A comma separated list of permissions that you would like the users to grant to your integration. See below a table with more details about this. |
| state | A unique and unguessable string. It is used to protect you against cross-site request forgery attacks. |

And here are some common errors that you may encounter (you will find more info in `error.error_message`):

| Error | Description |
| --- | --- | 
| ACCESS_DENIED  | When the user denies your authorization request, Twist will redirect the user to the configured redirect URI with the error parameter: `http://example.com?error=ACCESS_DENIED`. |
| FORBIDDEN  | A permissions issue happened |
| BAD_REQUEST  | The request was badly formatted, for example, if you supply an invalid `scope`  |


### Step 2: The redirection to your integration site
When the user grants your authorization request, the user will be redirected to the redirect URL configured in your integration setting. The redirect request will come with two query parameters attached: `code` and `state`.

The `code` parameter contains the authorization code that you will use to exchange for an access token. The state parameter should match the state parameter that you supplied in the previous step. If the state is unmatched, your request has been compromised by other parties, and the process should be aborted.


### Step 3: The redirection to your integration site
Once you have the authorization `code`, you can exchange it for the access token at the endpoint POST `https://twistapp.com/oauth/access_token`.

| Name | Description |
| --- | --- | 
| client_id | The unique Client ID of the Twist integration that you registered. |
| client_secret | The unique Client Secret of the Twist integration that you registered. |
| code | The unique string code that you obtained in the previous step. |


## Scopes

These are the scope permissions that the user grant your integration:

| Name | Description |
| --- | --- | 
| user:write | Access and update user's personal settings |
| user:read | Access user's personal settings |
| workspaces:write | Access and update teams the user is part of |
| workspaces:read | Access teams the user is part of |
| channels:remove | Access, update, and delete channels |
| channels:write | Access and update channels |
| channels:read | Access channels |
| threads:remove | Access, update, and delete threads |
| threads:write | Access and update threads |
| threads:read | Access threads |
| comments:remove | Access, update, and delete comments |
| comments:write | Access and update comments |
| comments:read | Access comments |
| groups:remove | Access, update, and delete groups |
| groups:write | Access and update groups |
| groups:read | Access groups |
| messages:remove | Access, update, and delete messages |
| messages:write | Access and update messages |
| messages:read | Access messages |
| reactions:remove | Access, update, and delete reactions |
| reactions:write | Access and update reactions |
| reactions:read | Access reactions |
| search:read | Search |
| attachments:write | Access and update attachments |
| attachments:read | Access attachments |
| notifications:write | Read and update user's notifications settings |
| notifications:read | Read user's notifications settings |
