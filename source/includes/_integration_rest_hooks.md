# Integrations: Rest hooks

The significant benefit to [REST hooks](http://resthooks.org/) is that you don't need to poll for changes, but can instead wait for hooks to deliver the payload when a change happens.

Twist implements REST hooks for most changes inside the system.

Please note that REST Hooks only work with oAuth2 integrations and require an access token from an oAuth2 integration.


## Step 1: Subscribe a hook

> Example

```shell
curl https://api.twistapp.com/api/v2/hooks/subscribe \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d target_url=https://hooks.yourdomain.com/<unique_target_url>
  -d event=workspace_user_added
```

Subscribe to an event, the full list of events is listed below.

On a successful creation Twist will return a `201 Created`.

A `403 Forbidden` will be thrown if the access token scope does not have the permission to subscribe to the specified event type.

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| target_url | String | Yes | The URL we should call when an event happens |
| event_type | String | Yes | What Twist event should trigger the call |
| workspace_id | Number | No | Only trigger for following `workspace_id` |
| channel_id | Number | No | Only trigger for following `channel_id` |
| thread_id | Number | No | Only trigger for following `thread_id` |
| conversation_id | Number | No | Only trigger for following `conversation_id` |


## Step 2: Receiving hooks

When an event happens, we'll send a request to your `target_url` that will be JSON encoded.

The payload will be the object that triggered the event, for example `channel_added` will include [the channel object](#channels). 


## Step 3: Unsubscribe a hook

> Example

```shell
curl https://api.twistapp.com/api/v2/hooks/subscribe \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \
  -d target_url=https://hooks.yourdomain.com/<unique_target_url>
```

To stop listening to changes just unsubscribe your hook.

On a successful unsubscribe, we return a `200 OK`.


### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| target_url | String | Yes | The URL we should unsubscribe |


## Supported hook events

These are the events you can subscribe to:


| Event type | Description |
| ---------- | ----------- |
| workspace_added | Triggers when a workspace is added |
| workspace_updated | Triggers when a workspace is updated |
| workspace_deleted | Triggers when a workspace is deleted |
| workspace_user_added | Triggers when a user is added to a workspace | 
| workspace_user_updated | Triggers when a user is updated inside a workspace | 
| workspace_user_removed | Triggers when a user is removed from a workspace | 
| channel_added | Triggers when a channel is added |
| channel_updated | Triggers when a channel is updated |
| channel_deleted | Triggers when a channel is deleted |
| channel_user_added | Triggers when a user is added to a channel | 
| channel_user_updated | Triggers when a user is updated inside a channel | 
| channel_user_removed | Triggers when a user is removed from a channel | 
| thread_added | Triggers when a thread is added |
| thread_updated | Triggers when a thread is updated |
| thread_deleted | Triggers when a thread is deleted |
| comment_added | Triggers when a comment is added |
| comment_updated | Triggers when a comment is updated |
| comment_deleted | Triggers when a comment is deleted |
| message_added | Triggers when a message is added |
| message_updated | Triggers when a message is updated |
| message_deleted | Triggers when a message is deleted |
| group_added | Triggers when a group is added |
| group_updated | Triggers when a group is updated |
| group_deleted | Triggers when a group is deleted |
| group_user_added | Triggers when a user is added to a group | 
| group_user_removed | Triggers when a user is removed from a group | 
