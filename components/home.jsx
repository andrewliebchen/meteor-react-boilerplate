Home = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      posts: Posts.find().fetch()
    };
  },

  render() {
    return (
      <div className="wrapper">
        <h1>Hello, World!</h1>
        <div className="posts">
          {this.data.posts.map((post, i) => {
            return <PostContent post={post} key={i}/>;
          })}
        </div>
      </div>
    );
  }
});

if(Meteor.isClient) {
  FlowRouter.route('/', {
    subscriptions() {
      this.register('posts', Meteor.subscribe('posts'));
    },

    action() {
      FlowRouter.subsReady('posts', () => {
        DocHead.setTitle('Meteor React Boilerplate');
        ReactLayout.render(Layout, {
          content: <Home/>
        });
      });
    }
  });
}
