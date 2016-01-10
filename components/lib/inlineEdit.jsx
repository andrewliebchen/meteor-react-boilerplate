InlineEdit = React.createClass({
  propTypes: {
    defaultValue: React.PropTypes.string,
    method: React.PropTypes.string,
    id: React.PropTypes.string,
    type: React.PropTypes.oneOf(['input', 'textarea']),
    placeholder: React.PropTypes.string,
    successMessage: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      type: 'input',
      placeholder: 'Click to add'
    };
  },

  getInitialState() {
    return {
      editing: false,
      text: this.props.defaultValue
    };
  },

  handleEditToggle() {
    this.setState({editing: !this.state.editing});
  },

  handleOnChange(event) {
    this.setState({text: event.target.value});
  },

  handleSave(event) {
    if(event.which === 13) {
      if(!event.shiftKey) {
        Meteor.call(this.props.method, {
          id: this.props.id,
          value: this.state.text
        }, (error, success) => {
          if(success){
            Session.set('alert', {
              status: 'success',
              message: this.props.successMessage
            });
            this.setState({
              editing: false
            });
          }
        });
      }
    }
  },

  render() {
    let {defaultValue, type} = this.props;
    if(this.state.editing) {
      return (
        <div className="form-group">
          {type === 'input' ?
            <input
              type="text"
              className="form-control"
              ref="inlineInput"
              defaultValue={this.state.text}
              onChange={this.handleOnChange}
              onBlur={this.handleEditToggle}
              onKeyPress={this.handleSave}
              autoFocus/>
          : null}
          {type === 'textarea' ?
            <span>
              <textarea
                ref="inlineInput"
                className="form-control"
                defaultValue={this.state.text}
                onChange={this.handleOnChange}
                onKeyPress={this.handleSave}
                onBlur={this.handleEditToggle}
                autoFocus/>
              <p className="help-block">
                Format with Markdown. Shift + enter to skip a line.
              </p>
            </span>
          : null}
        </div>
      );
    }
    return (
      <span>
        {defaultValue ? type === 'textarea' ?
          <Markdown>{defaultValue}</Markdown>
        : defaultValue : this.props.placeholder}
        <button
          className="btn btn-default btn-xs"
          onClick={this.handleEditToggle}>
          Edit
        </button>
      </span>
    );
  }
});
