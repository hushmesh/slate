# Integrations: URL Reports

Share reports with your team on a recurring basis by requesting data from an URL.


## Returning Markdown content

Automatic URL Reports can return plain Markdown content and Twist will use it as content for the new thread.

For example, the URL can return following (e.g. to generate automatic growth reports):

```text
Apple today announced financial results for its fiscal 2017 second quarter ended April 1, 2017.

Core numbers:

* $78.4 Billion Revenue
* 78.3 Million iPhones
* 13.1 Million iPads Sold
* ...
```

## Returning JSON content

The Content URL can also return a JSON object specifying `title` and `content` of the new thread.

For example:

```json
Content-type: application/json
{
    "title": "Webdev snippets | <date>",
    "content": "Please share your weeky snippets"
}
```


## Automatic date in the title

You can use `<date>` in the `title`, and we will convert it to the current date.
