// To send emails, install the email package, and add Sendgrid credentials
// to settings.json

Meteor.startup(() => {
  if(Meteor.settings.email.username !== '') {
    let smtp = {
      username: Meteor.settings.email.username,
      password: Meteor.settings.email.password,
      host: Meteor.settings.email.host
    }

    process.env.MAIL_URL = 'smtp://' + smtp.username + ':' + smtp.password + '@' + smtp.host;
  }
});
