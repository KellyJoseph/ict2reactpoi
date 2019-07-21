import React, { Component, Fragment } from "react";

export default class Form extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <span className="locationitem">
            <span>{` ${this.props.location.name}`}</span>
            <span>{` ${this.props.location.description}`}</span>
            <span>{` ${this.props.location.author}`}</span>
            <span> view photos link </span>
            <span> edit handler </span>
            <span> delete handler </span>
          </span>
        </div>
      </Fragment>
    );
  }
}
