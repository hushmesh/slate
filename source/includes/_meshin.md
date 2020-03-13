# Meshin

In order to make authorized calls to the Mesh, you must first obtain an access token. This section describes how to obtain such a token.

Before getting started, you need to [create an app](http://developer.hushmesh.com/relying-party-registration) and configure a valid redirect URL. A registered HushMesh integration is assigned a unique Client ID and Client Secret which are needed for the OAuth2 flow.

To autorize user to the mesh as a developer you have two options: use API endpoint directly as explained in authentication section or use our meshin button.

If you're going to use meshin button, you're going to have better mobile device meshin experience out of the box (direct Meshin application opening on mobile devices instead of QR code)

## Meshin button

You can find generated button code for your application on [your application page](http://developer.hushmesh.com/relying-party-registration)

> First part:

```html
<button id="meshin-button" class="meshin-button">meshin</button>
```

Button code contains three parts:

First part is HTML for your button. You can add your own CSS or apply any CSS classes from your framework

> Second part:

```html
<script src="https://developer.hushmesh.com/relying-party-registration/meshlib.js"></script>
```

Second part includes tiny meshin library to your application

> Third part:

```javascript
<script>
  window.Meshlib = new Meshlib({
    clientId: 'demo',
    responseType: 'token_id_token',
    redirectUri: 'https://beta.hushsafe.com/auth'
  }).init()
</script>
```

Third part is library initialization with your application parameters

## JavaScript frameworks compatibility

> Include an init:

```javascript
import Meshlib from '@/assets/js/meshlib'
const meshApi = new Meshlib({
  clientId: 'demo',
  responseType: 'token_id_token',
  redirectUri: 'https://beta.hushsafe.com/auth'
})
```

If you are using any modern JavaScript framework, you may want to use slightly different approach.

You can create meshin button component and inside the component include and initialize meshin library. You can [download meshlib](https://developer.hushmesh.com/relying-party-registration/meshlib.js) and include it in your project.

> Inside handler:

```javascript
meshApi.meshin()
```

After that you just need to use meshin method inside your on click handler:

## The authorization request

In case you don't want to use our meshin button, you can implement meshin experience by yourself.

Redirect users to the authorization URL at the endpoint `https://api.hshm.sh/v0/init`, with the specified request parameters. After successful authorization, an access_token going to be available as a query parameter and should be used to make API calls to other Mesh endpoints

Here follow the required parameters:

| Name | Description |
| --- | --- |
| client_id | The unique Client ID of the Mesh integration that you registered. |
| response_type | A comma separated list of permissions that you would like the users to grant to your integration. See below a table with more details about this. |
| redirect_uri | A unique and unguessable string. It is used to protect you against cross-site request forgery attacks. |
