AccountActionsMixin = {
  handleSignOut() {
    Meteor.logout();
  },

  handleGoogleSignIn() {
    Meteor.loginWithGoogle();
  },

  handleFacebookSignIn() {
    Meteor.loginWithFacebook();
  },

  handleGithubSignIn() {
    Meteor.loginWithGithub();
  },

  handleTwitterSignIn() {
    Meteor.loginWithTwitter();
  }
}
