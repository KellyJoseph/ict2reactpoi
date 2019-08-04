import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class LocationItem extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <span className="locationitem">
            <span>{` ${this.props.location.name}`}</span>
            <span>{` ${this.props.location.description}`}</span>
            <span>{` ${this.props.location.author}`}</span>
            <span>
              <Link to={`/photos/${this.props.location.name}`}>
                View Photos
              </Link>
            </span>
            <span> view photos link </span>
            <span> edit handler </span>
            <span> delete handler </span>
          </span>
        </div>
      </Fragment>
    );
  }
}
