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

### User accounts

The [Service Configuration](https://atmospherejs.com/meteor/service-configuration) package allows you to configure accounts without using Meteor's Blaze-based UI. Add Facebook, Github, Google, or Twitter public and secret keys to `settings.json` and the boilerplate will take care of the rest...

Account services set up links:
* [Facebook Developers](https://developers.facebook.com/apps/)
* [Github Applications](https://github.com/settings/applications)
* [Google Developers Console](https://console.developers.google.com/)
* [Twitter Apps](https://apps.twitter.com/)

Alternatively, if you don't want to use the Service Configuration package, you can use the `<AccountsUIWrapper/>` component. This is a simple React wrapper around the Blaze accounts UI component.

### User roles

If you're building an application that requires user roles, I've included [Roles](https://atmospherejs.com/alanning/roles), a great package for creating, validating, and managing user roles. Once you've created at least one user via your UI or in `meteor shell`, you can promote that user to an admin by opening `meteor shell`, finding the ID of the user you want to promote, then run:

```
Roles.addUsersToRoles(USERID, ['admin'])
```

For more about Roles, check out the documentation on Atmosphere or [Github](https://github.com/alanning/meteor-roles/).

### Sending email from your app

To send an email from your application, set up a free account with [Sendgrid](https://sendgrid.com/), then add your credentials to the email section of your `settings.json`. A general method to send email is available:

```
Meteor.call('sendEmail', {
  to: 'user@example.com',
  from: 'you@example.com',
  subject: 'Lift off with Meteor',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
});
```

## Organization

Directory structure should be recognizable if you're familiar with Meteor.

#### `/components`

As you're building your app, most of your time will be spent in `/components`. This directory will house all of your React components. Since Meteor is an isomorphic JS framework, we can include client- and server-side in the same file.

Generally you can have your React component, Flow Router routes, and server methods in the same file. This is pretty sweet because it represents a true _separation of concerns_ because each _file_ contains everything necessary for that component to function!

For example:

```js
Widget = React.createClass({
  handleWidgetClick() {
    Meteor.call('updateWidget');
  },

  render() {
    return (
      <div onClick={this.handleWidgetClick} className="widget">
    );
  }
});

if(Meteor.isClient) {
  FlowRouter.route('/widgets/:_id', {
    action(id) {
      ReactLayout.render(Widget);
    });
  });
}

if(Meteor.isServer) {
  Meteor.methods({
    updateWidget() {
      return Widgets.update(...);
    }
  });
}
```

Maybe this is a bad idea, I don't know. Make your own boilerplate.

#### `/lib`

`/lib` contains a directory for React mixins. This ensures that mixins will be available before React components are loaded...

#### `/styles`

The boilerplate uses Sass, but feel free to remove the `fourseven:scss` package if you want to use Less or CSS only.

## Dependencies & packages

Here's a few more packages included (that haven't been mentioned already)...

Package | Description
------- | -----------
fourseven:scss | Sass and SCSS support for Meteor.js (with autoprefixer and sourcemaps).
kadira:dochead | Isomorphic way to manipulate document.head for Meteor apps
kadira:flow-router | Carefully Designed Client Side Router for Meteor
momentjs:moment | Parse, validate, manipulate, and display dates - official Meteor packaging
meteorhacks:npm | Use npm modules with your Meteor App
stevezhu:lodash | A utility library delivering consistency, customization, performance, & extras.
dyaa:bootstrap-sass-only | Bootstrap with Sass-files only. React should handle many of the interface actions instead of Bootstrap's JS.
email | Send email messages
q42:react-markdown | React component to parse markdown in Meteor

## Deployment

### meteor.com

Until MDG discontinues it, you can always deploy for free by runing `meteor deploy`. More about [Meteor deployment](http://guide.meteor.com/deployment.html).

### Heroku

Set up a (free) [Heroku account](https://id.heroku.com/) and deploy:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Acknowledgements

* [Ryan Glover](https://twitter.com/rglover) AKA [The Meteor Chef](https://themeteorchef.com/) always provides solutions and inspiration. How do you do it? Seriously, this guy puts a [massive amount of time](https://docs.google.com/spreadsheets/d/1aSwgJRngLpx-anWAzuG7s_hqcjMwlnLdLNJyYhzH4eY/edit#gid=0) into each recipe.
* [Sacha Greif](http://sachagreif.com/) and his [Telescope](https://github.com/TelescopeJS/Telescope). If you ever need to know how to do something in Meteor, a solution is probably in Telescope's source.
