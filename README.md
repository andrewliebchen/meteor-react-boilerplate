# Meteor/React boilerplate

MeteorJS and ReactJS go together like peas and carrots, peanut butter and jelly, or peanut butter and chocolate. Unfortunately, getting an app up and running on this combination not straightforward. I've collected some of the repetitive boilerplate set up into this repo, and try to hint how I like to organize projects.

Issues and PR's welcome! In the meantime, the nirvana of Meteor/React awaits...

## Set up

If you haven't already set up Meteor, [do that first](https://www.meteor.com/install). `git clone` this repo or [download a ZIP](https://github.com/andrewliebchen/meteor-react-boilerplate/archive/master.zip) to your local machine.

You'll need to rename `example.settings.json` to just `settings.json`. You can take this opportunity to set up accounts (see the next section 👇), or just leave it as is.

That's it! The first time you start the development server, Meteor will install all packages and dependencies. 🌟

## Development

To start a local development server, run:

```
make serve
```

This is a simple alias for `meteor --settings settings.json`, which you're more than welcome to run...but the `make` command is much shorter 💁

### Accounts

The [Service Configuration](https://atmospherejs.com/meteor/service-configuration) package allows you to configure accounts without using Meteor's Blaze-based UI. Add Facebook, Github, Google, or Twitter public and secret keys to `settings.json` and the boilerplate will take care of the rest...

Account services set up links:
* [Facebook Developers](https://developers.facebook.com/apps/)
* [Github Applications](https://github.com/settings/applications)
* [Google Developers Console](https://console.developers.google.com/)
* [Twitter Apps](https://apps.twitter.com/)

### User roles

If you're building an application that requires user roles, I've included [Roles](https://atmospherejs.com/alanning/roles), a great package for creating, validating, and managing user roles. Once you've created at least one user via your UI or in `meteor shell`, you can promote that user to an admin by opening `meteor shell`, finding the ID of the user you want to promote, then run:

```
Roles.addUsersToRoles(USERID, ['admin'])
```

For more about Roles, check out the documentation on Atmosphere or [Github](https://github.com/alanning/meteor-roles/).

### Sending email from your app


## Organization

## Dependencies & packages

## Deployment

## Acknowledgements
