# Search
The search query allows for finding threads and conversations matching some text.


## Search for query

> Example:

```shell
curl https://api.twistapp.com/api/v2/search/query \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
  -d query=texts
```

`GET /api/v2/search/query`

> Return object::

```json
{
  hits: 25,
  has_more: true,
  next_cursor_mark: "96e22dcb41564ab5802736b1d1e009d3",
  items: [
    {
      "obj_type": "thread",
      "title": "Far far away",
      "snippet": "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      "details_link": "/api/v2/search/comments?query=texts&workspace_id=201&thread_id=401"
      "id": 501,
      "thread_id": 401,
      "channel_id": 301,
      "last_posted_ts": 1486726709,
      "last_author": 101,
      "participants": [ 101, 102, 103, 104 ],
      "archived": false
    },
    {
      "obj_type": "conversation",
      "title": "Chat",
      "snippet": "Even the all-powerful Pointing has no control about the blind texts..."
      "details_link": "/api/v2/search/messages?query=texts&workspace_id=201&aggregate_id=123-345-678-9"
      "id": 703,
      "conversation_id": 601,
      "last_author": 101
      "chunk_start_ts": 1486727013,
      "chunk_end_ts": 1486727132,
      "last_posted_ts": 1486727120,
      "participants": [ 101, 105 ],
      "user_ids": [ 101, 105],
      "archived": false
    }
  ]
}
```

Searches for a string.

### Parameters
| Name | Type | Required | Description |
| --- | --- | --- | --- |
| query | String | Yes | The full text query to search for |
| limit | Number | No | Limits the number of conversations |
| cursor\_mark | String | No | Token for pagination |

### Return object details
| Name | Type | Description |
| --- | --- | --- |
| hits | Number | The number of results found |
| has\_more | Boolean | Whether there are more results that were not returned |
| next\_cursor\_mark | String | The cursor mark to use in order to get more results |
| items | Array of Objects | The actual result items, threads or conversations found |
| obj\_type | String | The type of the item, a thread or a conversation |
| title | String | The title of the item |
| snippet | String | Part of the text that matched the search query |
| details\_link | String | A URL that can be used to get more details on the item |
| id | Number | The id of the comment or message |
| thread\_id | Number | The id of the thread that the comment is part of |
| conversation\_id | Number | The id of the conversation the message is part of |
| last\_posted\_ts | Number | The timestamp of the last post in the discussion |
| last\_author | Number | The id of the last user that wrote in that discussion |
| participants | Array of Numbers | The user ids that participate in that comment or message |
| user\_ids | Array of Numbers | The user ids that have joined that conversation |
| archived | Boolean | Whether conversation or thread's channel is archived |


## Get more details about comments

> Example:

```shell
curl "https://api.twistapp.com/api/v2/search/comments?query=texts&workspace_id=201&thread_id=401" \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
```

`GET /api/v2/search/comments`

> Return object:

```json
{
  "terms" : [
    "texts"
  ]
  "items" : [
    {
      "type" : "thread",
      "expanded" : true
      "obj" : {
        "id" : 501
        "last_obj_index" : 3,
        "title" : "Far far away",
        "content" : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        "snippet" : "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        "channel_id" : 301,
        "workspace_id" : 201,
        "creator" : 101,
        "snippet_creator" : 101,
        "comment_count" : 4,
        "posted" : "2017-02-10 14:12:22",
        "posted_ts" : 1486735942,
        "last_updated" : "2017-02-10 14:14:36",
        "last_updated_ts" : 1486736076,
        "is_starred" : 0,
        "attached_to_everyone" : false,
        "participants" : [
          101, 102, 103, 104
        ],
        "recipients" : [
          101, 102, 103, 104
        ],
        "groups" : [],
        "reactions" : {},
        "attachments" : [],
      },
    },
    {
      "type" : "comment_range",
      "idx_start" : 0,
      "idx_end" : 3,
      "expand_link" : "/api/v2/search/expand_comment_range?idx_end=3&thread_id=401&workspace_id=201&idx_start=0",
      "top_expand_link" : "/api/v2/search/expand_comment_range?idx_end=3&thread_id=401&workspace_id=201&idx_start=0&direction=top",
      "bottom_expand_link" : "/api/v2/search/expand_comment_range?idx_end=3&thread_id=401&workspace_id=201&idx_start=0&direction=bottom"
    }
  ],
}
```

Here we get more details about a thread and its comments.


## Expand comment range

> Example:

```shell
curl "https://api.twistapp.com/api/v2/search/expand_comment_range?idx_end=3&thread_id=401&workspace_id=201&idx_start=0" \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
```

`GET /api/v2/search/expand_comment_range`

> Return object:

```json
{
  "terms": [],
  "items": [
   {
     "type" : "comment",
     "expanded" : false
     "obj" : {
       "id" : 164313,
       "obj_index" : 0,
       "content" : "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
       "thread_id" : 401,
       "channel_id" : 301,
       "workspace_id" : 201,
       "creator" : 102,
       "posted" : "2017-02-10 14:12:38",
       "posted_ts" : 1486735958,
       "system_message" : null,
       "is_deleted" : false,
       "attached_to_everyone" : false,
       "groups" : [],
       "recipients" : [
         101, 102, 103, 104
       ],
       "reactions" : {},
       "attachments" : [],
     },
  },
   ...
  ]
```

The thread is expanded, that is more comments are returned.


## Get more details about messages

> Example:

```shell
curl "https://api.twistapp.com/api/v2/search/messages?query=hello&workspace_id=201&aggregate_id=123-345-678-9" \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
```

`GET /api/v2/search/messages`

> Return object:

```json
{
  "terms" : [
    "texts"
  ],
  "items" : [
    {
      "type" : "conversation_message_range",
      "idx_start" : 0,
      "idx_end" : 5,
      "expand_link" : "/api/v2/search/expand_conversation_message_range?conversation_id=601&idx_end=5&workspace_id=201&idx_start=0"
      "top_expand_link" : "/api/v2/search/expand_conversation_message_range?conversation_id=601&idx_end=5&workspace_id=201&idx_start=0&direction=top",
      "bottom_expand_link" : "/api/v2/search/expand_conversation_message_range?conversation_id=601&idx_end=5&workspace_id=201&idx_start=0&direction=bottom",
    },
    {
      "type" : "conversation_message"
      "expanded" : false,
      "obj" : {
        "obj_index" : 6,
        "content" : "Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.",
        "id" : 702,
        "conversation_id" : 601,
        "workspace_id" : 201,
        "creator" : 105,
        "posted_ts" : 1486544628,
        "reactions" : {},
        "attachments" : [],
        "actions" : [],
        "system_message" : null
        "is_deleted" : false,
      },
    },
    {
      "type" : "conversation_message",
      "expanded" : true
      "obj" : {
        "obj_index" : 7,
        "content" : "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
        "id" : 703,
        "conversation_id" : 601,
        "workspace_id" : 201,
        "creator" : 101
        "posted_ts" : 1486545169,
        "reactions" : {
          "👍" : [
            105
          ]
        },
        "attachments" : [],
        "actions" : [],
        "system_message" : null,
        "is_deleted" : false,
      },
    },
    {
      "type" : "conversation_message"
      "expanded" : false,
      "obj" : {
        "obj_index" : 8,
        "content" : "One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
        "id" : ,
        "conversation_id" : 601,
        "workspace_id" : 201,
        "creator" : 105,
        "posted_ts" : 1486545334,
        "reactions" : {
          "👍" : [
            101
          ]
        },
        "attachments" : [],
        "actions" : [],
        "system_message" : null
        "is_deleted" : false,
      },
    }
  ]
}
```

Here we get more details about a conversation and its messages.


## Expand conversation message range

> Example:

```shell
curl "https://api.twistapp.com/api/v2/search/expand_conversation_message_range?conversation_id=601&idx_end=5&workspace_id=201&idx_start=0&direction=top" \
  -H "Authorization: Bearer 9b1bf97783c1ad5593dee12f3019079dbd3042cf" \ 
```

`GET /api/v2/search/expand_conversation_message_range`

> Return object:

```json
{
  "terms" : []
  "items": [
    {
      "type" : "conversation_message",
      "obj" : {
        "obj_index" : 0,
        "content" : "She packed her seven versalia, put her initial into the belt and made herself on the way.",
        "id" : 701,
        "conversation_id" : 601,
        "workspace_id" : 201,
        "creator" : 105,
        "posted_ts" : 1458834794,
        "reactions" : {},
        "attachments" : [],
        "actions" : [],
        "system_message" : null,
        "is_deleted" : false,
      },
    },
    ...
  ],
}
```

The conversation is expanded, that is more comments are returned.
