# Errors

Errors will be returned as JSON objects.

> Example of error JSON object

```json
{
    "error_uuid": "f699b0e0caa4446e847e17cc1d42801b",
    "error_code": 200,
    "error_extra": { },
    "error_string": "Invalid token"
}
```

The errors returned:

| Error code | Error explanation | HTTP status code |
| ------------ | ----------------- | --------------- |
| 19 | Required argument is missing | 400 |
| 20 | Invalid argument value | 400 |
| 101 | Your email is already found in our database | 400 |
| 102 | Password too short | 400 |
| 103 | Email is invalid | 400 |
| 104 | Email or password are invalid | 400 |
| 105 | Workspace not found | 404 |
| 106 | User not found | 404 |
| 107 | Channel not found | 404 |
| 108 | Thread not found | 404 |
| 109 | Forbidden | 403 |
| 110 | Resource not found | 404 |
| 111 | Unknown temp id | 404 |
| 112 | Invalid temp id | 400 |
| 113 | Temp id already found | 400 |
| 114 | Bad Request | 400 |
| 115 | Comment not found | 404 |
| 116 | Device not found | 404 |
| 117 | Search not available | 404 |
| 118 | One or more attachments don't comply with the JSON specification | 400 |
| 119 | Group not found | 404 |
| 120 | You are not logged in | 401 |
| 121 | Invalid timezone | 401 |
| 122 | Not supported reaction | 401 |
| 124 | Conversation not found | 404 |
| 125 | Message not found | 404 |
| 126 | Your name is too short | 400 |
| 127 | You can | remove the last admin', 400 |
| 128 | Invalid date range | 400 |
| 129 | Google account is not connected to any Twist user | 404 |
| 130 | Google account is already connected to a Google user | 403 |
| 131 | Already found | 409 |
| 132 | Email not found | 404 |
| 200 | Invalid token | 403 |
| 201 | Internal Server Error | 500 |
| 202 | Upload failed | 400 |
| 203 | Payment required | 402 |
| 406 | Not acceptable | 406 |

The HTTP error codes returned:

| Status code | Description |
| ----------- | ----------- |
| 400 | Bad Request |
| 401 | Access Denied (token invalid, the user needs to login) |
| 403 | Forbidden |
| 404 | Not found |
| 406 | Not acceptable |
| 500 | Internal Server Error |

## Testing error handling

To test error handling simply provide `?chaos=random` as an argument. If you want to test a specific error you can supply `?chaos=109`.
