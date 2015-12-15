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
  propTypes: {
    content: React.PropTypes.element.isRequired
  },

  render() {
    return (
      <div className="wrapper">
        <Alert/>
        {this.props.content}
      </div>
    );
  }
});
