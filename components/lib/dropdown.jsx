const CSSTransitionGroup = React.addons.CSSTransitionGroup;

DropdownItem = React.createClass({
  propTypes: {
    handleClick: React.PropTypes.func
  },

  render() {
    return (
      <li>
        <a href="#" onClick={this.props.handleClick}>{this.props.children}</a>
      </li>
    );
  }
});

Dropdown = React.createClass({
  propTypes: {
    toggle: React.PropTypes.string,
    className: React.PropTypes.string
  },

  getInitialState() {
    return {
      menu: false,
      clickOnDropdown: false
    };
  },

  handleMouseDown() {
    this.setState({clickOnDropdown: true});
  },

  handleMouseUp() {
    this.setState({clickOnDropdown: false});
  },

  pageClick() {
    this.setState({
      menu: false,
      clickOnDropdown: false
    });
  },

  handleDropdownToggle() {
    this.setState({menu: !this.state.menu});
  },

  componentDidMount() {
    window.addEventListener('mousedown', this.pageClick, false);
  },

  render() {
    let dropdownClassName = classnames({
      'dropdown': true,
      'open': this.state.menu
    });
    return (
      <div className={`${dropdownClassName} ${this.props.className}`}>
        <button
          className="btn btn-default dropdown-toggle"
          onClick={this.handleDropdownToggle}>
          {this.props.toggle} <span className="caret"/>
        </button>
        <CSSTransitionGroup
          transitionName="dropdown-menu"
          transitionEnterTimeout={150}
          transitionLeaveTimeout={150}>
          {this.state.menu ?
            <ul
              key={1}
              className="dropdown-menu"
              onMouseDown={this.handleMouseDown}
              omMouseUp={this.handleMouseUp}>
              {this.props.children}
            </ul>
          : null}
        </CSSTransitionGroup>
      </div>
    );
  }
});
