Meteor.startup(function() {
  if(Posts.find().count() === 0) {
    Posts.insert({
      title: 'Lorem ipsum dolor sit amet',
      content: 'Vocibus necessitatibus eu usu. Inimicus accusamus ad sea, ut cum audiam molestie, omnis regione erroribus te vis. Ea eum malis dicit probatus. Vim alia viris populo ea. Vis no expetendis moderatius percipitur. Nam ex mollis lobortis delicata. Vix ridens definitionem ne, ne labitur bonorum consequuntur vel.',
      likes: 0
    });
  }
});
