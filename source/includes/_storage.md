# Storage API

## Get Object Ids

> Example

```shell
  GET https://api.hshm.sh/v0/storage
```

`GET api.hshm.sh/v0/storage`

Lists object ids for the meshed in user

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

Store arbitrary data for the meshed in user

> Return object

```json
{
   "statusCode": 200,
   "statusDescription": "Success"
}
```

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| object_id | String | Yes | The id of the stored data |

## Get stored data

> Example

```shell
  GET https://api.hshm.sh/v0/storage/some_id
```

`GET api.hshm.sh/v0/storage/{object_id}`

Fetch data that was stored for the meshed in user

> Return object

The data in the same format user stored previously

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| object_id | String | Yes | The id of the stored data |

## Delete stored data

> Example

```shell
  DELETE https://api.hshm.sh/v0/storage/some_id
```

`DELETE api.hshm.sh/v0/storage/{object_id}`

Delete data that was stored for the meshed in user.

> Return object

```json
{
   "statusCode": 200,
   "statusDescription": "Success"
}
```

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| object_id | String | Yes | The id of the stored data |
