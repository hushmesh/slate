# Integrations: Configure URL

We redirect users to the configure URL when setting up a `thread` or a `channel` integration.

The configured URL lets you connect the installation with your app.

The configure URL also includes an incoming webhook URL, which you can use as an easy way to post messages into Twist.


## Parameters you'll get

You'll get following GET parameters served to your configure URL:


### GET Parameters
| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| install_id | Number | No | The unique id of the installation |
| post_data_url | String | No | A unique URL you can use to post content to Twist |
| user_id | Number | No | The id of the installer |
| user_name | String | No | The full name of the installer |

To get back to the installation page, please use `https://twistapp.com/integrations/installation/{ install_id }`.


## How to post data

> CURL example

```shell
curl -X POST -H 'Content-type: application/json' \
--data '{"content":"42?"}' \
 https://hooks.twistapp.com/...
```

Simply make a POST request to the `post_data_url`. In the POST include your data encoded in JSON.

### POST Parameters
| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| content | String | No | The content of the new object |
| title | String | Yes | If the integration type is `thread` include the title of the new thread |


## HTTPS enforcing

Twist enforces HTTPS everywhere, including our integrations. If you need a certificate, we highly recommend [Let's Encrypt](https://letsencrypt.org/). Furthermore we also enforce [certificate chain check](https://support.dnsimple.com/articles/what-is-ssl-certificate-chain/).


## HTTP Auth

We support and recommend that you use HTTP Auth for improving security, e.g. `https://user:password@host/path`.
