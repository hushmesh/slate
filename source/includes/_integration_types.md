# Integration: Types

Currently, Twist has four core integration types:

* oAuth 2 applications
* Channel integrations
* Thread integrations
* Slash command integrations

You have to carefully pick your integration type based on how your integration will be used.


## oAuth 2 applications

OAuth is an authorization protocol that allows you to access a user's data without the user needing to share login credentials.

Use this type to create more advanced integrations with Twist.


## Channel integrations
Channel integrations are installed on a channel level, and they can post new threads.

Example usage: A growth report that Twist posts on a weekly or monthly basis.

Channel integrations also have a scheduling option. You can let the user schedule when the channel integration will do its posting. For example, as a developer, you would just need to create an URL endpoint that can generate a growth report and you can let Twist handle scheduling and running of this growth report based on user’s preferences.


## Thread integrations
Thread integrations are installed on a thread level, and they can post new comments.

Example usage: Post comments when new issues are added to a Github repository.


## Slash command integrations
Slash command integrations are installed on a team level, and they add a slash command to the system. When a user types `/command arguments` your integration is run and can act upon the arguments.

Example usage: `/gif funny cats` is a slash command. Another example is the [appear.in](https://appear.in) integration, which lets you easily schedule video meetings (`/appear meeting-room`).


