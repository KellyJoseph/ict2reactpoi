import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class PhotoItem extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <span className="photoitem">
            <span>{` ${this.props.photo.name}`}</span>
          </span>
          <span> view photos link </span>
          <span> edit handler </span>
          <span> delete handler </span>
        </div>
      </Fragment>
    );
  }
}
