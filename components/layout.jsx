Alert = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      alert: Session.get('alert')
    };
  },

  componentDidUpdate() {
    if(this.data.alert) {
      setTimeout(() => {
        Session.set('alert', null);
      }, 5000);
    }
  },

  render() {
    if(this.data.alert) {
      return <p className="alert">{this.data.alert}</p>;
    } else {
      return false;
    }
  }
});

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
  },

  render() {
    return (
      <div className="wrapper">
        <Alert/>
        <header>
          <button onClick={this.handleGoogleSignIn}>
            Login with Google
          </button>
        </header>
        {this.props.content}
      </div>
    );
  }
});
