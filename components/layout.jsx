Layout = React.createClass({
  mixins: [AccountActionsMixin],

  propTypes: {
    content: React.PropTypes.element.isRequired
  },

  componentWillMount() {
    DocHead.addMeta({
      rel: "icon",
      type: "image/png",
      href: "/favicon.png "
    });
    DocHead.addMeta({
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    });
  },

  render() {
    return (
      <div className="wrapper">
        <header className="navbar navbar-default navbar-static-top">
          <div className="container">
            <a href="/" className="navbar-brand">Home</a>
            <button
              className="btn btn-default navbar-btn"
              onClick={this.handleGoogleSignIn}>
              Login with Google
            </button>
          </div>
        </header>
        <div className="container">
          <Alert/>
          {this.props.content}
        </div>
      </div>
    );
  }
});
