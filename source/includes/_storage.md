# Storage API

## Get object IDs

> Example

```shell
  GET https://api.hshm.sh/v0/storage
```

`GET api.hshm.sh/v0/storage`

— lists object IDs for the meshed in user.

> Return object

```json
{
   "statusCode": 200,
   "statusDescription": "Success",
   "objectIds": ["id1", "id2"]
}
```

## Store data

> Example

```shell
  POST https://api.hshm.sh/v0/storage/some_id
  body: {"title": "data"}
```

`POST api.hshm.sh/v0/storage/{object_id}`

— store arbitrary data for the meshed in user.

> Return object

```json
{
   "statusCode": 200,
   "statusDescription": "Success"
}
```

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `object_id` | String | Yes | The ID of the stored data |

## Get stored data

> Example

```shell
  GET https://api.hshm.sh/v0/storage/some_id
```

`GET api.hshm.sh/v0/storage/{object_id}`

— fetches data that was stored for the meshed in user.

The data in the same format user stored previously.

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `object_id` | String | Yes | The ID of the stored data |

## Delete stored data

> Example

```shell
  DELETE https://api.hshm.sh/v0/storage/some_id
```

`DELETE api.hshm.sh/v0/storage/{object_id}`

— deletes data that was stored for the meshed in user.

> Return object

```json
{
   "statusCode": 200,
   "statusDescription": "Success"
}
```

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `object_id` | String | Yes | The ID of the stored data |
