import React, { Component } from 'react';

class LinkTo extends Component {
  /**
   * @param {*} event
   * when no modifier, the normal browser-behaviour should be stopped and custom logic executed
   */
  handleClick(event) {
    if (this.hasModifier(event) === false) {
      event.preventDefault();
      this.triggerCallback(event);
    }
  }

  /**
   * @param {*} event
   * checks if modifier-key is active
   */
  hasModifier(event) {
    return event.ctrlKey || event.shiftKey || event.altKey || event.metaKey;
  }

  /**
   * overwriting this function may be useful, for making history.pushState
   */
  triggerCallback(event) {
    this.props.onClick(event);
  }

  render() {
    return (
      <a {...this.props} onClick={this.handleClick.bind(this)}>
        {this.props.children}
      </a>
    );
  }
}

export default LinkTo;
