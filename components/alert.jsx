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
    let {alert} = this.data;

    if(alert) {
      return (
        <div className={`alert alert-${alert.status}`}>
          {alert.message}
        </div>
      );
    } else {
      return false;
    }
  }
});
