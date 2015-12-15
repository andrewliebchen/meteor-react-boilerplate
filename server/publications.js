Meteor.publish(null, () => {
  return Meteor.roles.find({})
});

Meteor.publish('posts', () => {
  return Posts.find();
});

Meteor.publish('singlePost', (id) => {
  check(id, String);
  return Posts.find({_id: id});
});
