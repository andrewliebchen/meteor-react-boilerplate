PostContent = React.createClass({
  propTypes: {
    post: React.PropTypes.object.isRequired
  },

  handleLike() {
    Meteor.call('likePost', this.props.post._id, (error, success) => {
      Session.set('alert', `You liked ${this.props.post.title}`);
    });
  },

  render() {
    let {post} = this.props;
    return (
      <div className="post">
        <h2>
          <a href={`/${post._id}`}>{post.title}</a>
        </h2>
        <article>{post.content}</article>
        <p>
          <a onClick={this.handleLike}>{post.likes} Likes</a>
        </p>
      </div>
    );
  }
});

SinglePost = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let post = Posts.findOne();
    DocHead.setTitle(`${post.title} on Meteor React Boilerplate`);
    
    return {
      post: post
    };
  },

  render() {
    return <PostContent post={this.data.post}/>;
  }
});

if(Meteor.isClient) {
  FlowRouter.route('/:_id', {
    subscriptions(id) {
      this.register('posts', Meteor.subscribe('posts', id));
    },

    action(id) {
      FlowRouter.subsReady('posts', (id) => {
        ReactLayout.render(Layout, {
          content: <SinglePost/>
        });
      });
    }
  });
}

if(Meteor.isServer) {
  Meteor.methods({
    likePost(id) {
      return Posts.update(id, {
        $inc: {likes: 1}
      });
    }
  })
}
