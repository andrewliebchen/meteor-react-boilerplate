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

Meteor.methods({
  sendEmail(args) {
    check(args, {
      to: String,
      from: String,
      subject: String,
      text: String
    });

    this.unblock();
    Email.send(args);
  }
});
