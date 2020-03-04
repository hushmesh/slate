# Integrations: Outgoing webhooks

Outgoing webhooks send data when an activity happens (e.g. a new comment is added to the thread or an uninstall happens). We also send data when a user uses a slash command.

Outgoing webhooks will send an HTTPS POST request to your specified URL. The payload depends on the integration type.

Your webhooks handler can respond to add data back to Twist.

The outgoing hooks can work with any language or framework — as long as they support HTTPS and JSON.

Please note that outgoing webhooks are not the same as [REST Hooks](#integrations-rest-hooks), which Twist also implements. Rest hooks are harder to setup but much more powerful. Rest hooks are used by oAuth2 integrations while outgoing webhooks are used by Slash command, Thread and Channel integrations. 


## Example implementation

Please take a look at this simple example implementation:

* [Slash command: Implementing /appear room-name](https://gist.github.com/amix/b5428febcaff80c84f616453196fe7dc): A simple Flask app implemented in Python


## Payload when users add new objects
When a new message, thread or a new comment is added, you can expect following parameters.

### POST Parameters
| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| event_type | String | No | Can be `message`, `thread` or `comment` — depending where the slash command was used |
| workspace_id | Number | No | The workspace the object was posted in |
| content | String | No | The content of object, e.g. thread or message content |
| user_id | Number | No | The id of the poster |
| user_name | String | No | The name of the poster |
| conversation_id | Number | Yes | Will be set if `event_type` is `message` |
| conversation_title | String | Yes | Will be set if `event_type` is `message` |
| thread_id | Number | Yes | Will be set if `event_type` is `thread` or `comment` |
| thread_title | String | Yes | Will be set if `event_type` is `thread` or `comment` |
| channel_id | Number | Yes | Will be set if `event_type` is `thread` or `comment` |
| comment_id | Number | Yes | Will be set if `event_type` is `comment` |
| command | String | Yes | If the integration type is a slash command we'll include the command, e.g. `/hello` |
| command_argument | String | Yes | If the integration type is a slash command we'll include the command argument, e.g. for `/hello world` it would be `world` |


## Payload when an uninstall happens

When a team uninstalls your integration, you can expect following parameters. You can use this to clean up any state you may have on your end.

### POST Parameters
| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| event_type | String | No | Will be `uninstall` |
| install_id | Number | No | The unique id of the installation |
| workspace_id | Number | No | The workspace the installation belonged to |
| user_id | Number | No | The id of the uninstaller |
| user_name | String | No | The full name of the uninstaller |


## Payload when a ping happens

For debugging purposes, you might get a `ping` payload. You should respond back with a JSON `{"content": "pong"}`.

### POST Parameters
| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| event_type | String | No | Will be `ping` |
| user_id | Number | No | The id of the pinger |
| user_name | String | No | The full name of the pinger |


## Responding

### Adding content back

```json
Content-type: application/json
{
    "content": "42 is the answer to everything."
}
```

If your handler wishes to post a response back, use the following JSON response:


### Replacing content as a Slash command

```json
Content-type: application/json
{
    "content": "42 is the answer to everything.",
    "attachments": [
       {
          "thumbnails":{
             "1024x1024":"https://d10oy3rrrp8hu2.cloudfront.net/tn_l_06fc98f4b65a1996bd2c59f92e2ff23f.png",
             "512x512":"https://d10oy3rrrp8hu2.cloudfront.net/tn_m_06fc98f4b65a1996bd2c59f92e2ff23f.png",
             "192x192":"https://d10oy3rrrp8hu2.cloudfront.net/tn_s_06fc98f4b65a1996bd2c59f92e2ff23f.png"
          },
          "file_type":"image/png",
          "file_name":"test.png",
          "url":"https://d10oy3rrrp8hu2.cloudfront.net/06fc98f4b65a1996bd2c59f92e2ff23f/as/test.png",
          "file_size":222614,
          "upload_state":"uploaded",
          "attachment_id":"30cf79a8-4e6b-11e6-8b28-80e6501c348c"
       }
    ]
}
```

For slash command, your response will replace the user's content.

We'll try to unfurl any links found in the `content`. Optionally you can also include a list of custom `attachments` following the Attachments spec, e.g.



## Error handling

Non-200 responses will be retried 10 times in the span of 12 hours. 


## HTTPS enforcing

Twist enforces HTTPS everywhere, including our integrations. If you need a certificate, we highly recommend [Let's Encrypt](https://letsencrypt.org/). Furthermore we also enforce [certificate chain check](https://support.dnsimple.com/articles/what-is-ssl-certificate-chain/).


## HTTP Auth

We support and recommend that you use HTTP Auth for improving security, e.g. `https://user:password@host/path`.
