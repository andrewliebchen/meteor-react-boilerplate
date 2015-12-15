Meteor.publish(null, () => {
  return Meteor.roles.find({});
});

Meteor.publish('posts', () => {
  return Posts.find();
});

Meteor.publish('singlePost', (id) => {
  return Posts.find({_id: id});
});
