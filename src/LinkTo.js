import React, { Component } from 'react';

class LinkTo extends Component {
  /**
   * when no modifier, the normal browser-behaviour should be stopped and custom logic executed
   * 
   * @param {MouseEvent} event
   */
  handleClick(event) {
    if (this.hasModifier(event) === false) {
      event.preventDefault();
      this.triggerCallback(event);
    }
  }

  /**
   * checks if modifier-key is active
   *
   * @param {MouseEvent} event
   * @returns {Boolean}
   */
  hasModifier(event) {
    return event.ctrlKey || event.shiftKey || event.altKey || event.metaKey;
  }

  /**
   * overwriting this function may be useful, for making history.pushState
   * 
   * @param {MouseEvent} event
   */
  triggerCallback(event) {
    this.props.onClick(event);
  }

  /**
   * generates an a tag with its content
   * 
   */
  render() {
    return (
      <a {...this.props} onClick={this.handleClick.bind(this)}>
        {this.props.children}
      </a>
    );
  }
}

export default LinkTo;
