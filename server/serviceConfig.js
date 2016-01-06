let cleanServiceConfiguration = (service, clientId, secret) => {
  ServiceConfiguration.configurations.remove({
    service: service
  });

  let config = {
    generic: {
      service: service,
      clientId: clientId,
      secret: secret
    },
    facebook: {
      service: service,
      appId: clientId,
      secret: secret
    },
    twitter: {
      service: service,
      consumerKey: clientId,
      secret: secret
    }
  };

  switch (service) {
    case 'facebook':
      ServiceConfiguration.configurations.insert(config.facebook);
    case 'twitter':
      ServiceConfiguration.configurations.insert(config.twitter);
    default:
      ServiceConfiguration.configurations.insert(config.generic);
  };
};

// Service configurations
let facebook = Meteor.settings.facebook;
let github = Meteor.settings.github;
let google = Meteor.settings.google;
let twitter = Meteor.settings.twitter;

if(facebook.appId !== '') {
  createServiceConfiguration('facebook', facebook.appId, facebook.secret);
}

if(github.clientId !== '') {
  createServiceConfiguration('github', github.clientId, github.secret);
}

if(google.clientId !== '') {
  createServiceConfiguration('google', google.clientId, github.secret);
}

if(twitter.consumerKey !== '') {
  createServiceConfiguration('twitter', twitter.consumerKey, twitter.secret);
}
