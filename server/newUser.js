Accounts.onCreateUser((options, user) => {
  user.profile = user.profile || {};

  // Google config
  // user.profile.name = user.services.google.name;
  // user.profile.avatar_src = user.services.google.picture;
  // user.profile.email = user.services.google.email;

  return user;
});
