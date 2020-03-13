# Authentication

In order to make authorized calls to the Mesh, you must first obtain an access token. This section describes how to obtain such a token.


## Auth

Before getting started, you need to [create an app](http://developer.hushmesh.com/relying-party-registration) and configure a valid redirect URL. A registered HushMesh integration is assigned a unique Client ID and Client Secret which are needed for the OAuth2 flow.


### The authorization request

Redirect users to the authorization URL at the endpoint `https://api.hshm.sh/v0/init`, with the specified request parameters. After successful authorization, an access_token going to be available as a query parameter and should be used to make API calls to other Mesh endpoints

Here follow the required parameters:

| Name | Description |
| --- | --- |
| client_id | The unique Client ID of the Mesh integration that you registered. |
| response_type | A comma separated list of permissions that you would like the users to grant to your integration. See below a table with more details about this. |
| redirect_uri | A unique and unguessable string. It is used to protect you against cross-site request forgery attacks. |

And here are some common errors that you may encounter (you will find more info in `error.error_message`):

| Error | Description |
| --- | --- |
| FORBIDDEN  | A permissions issue happened |
| BAD_REQUEST  | The request was badly formatted, for example, if you supply an invalid `response_type`  |


## Response types

These are the response types available for your integration:

| Name | Description |
| --- | --- |
| code | Code |
| token | Token |
| id_token | id_token |

