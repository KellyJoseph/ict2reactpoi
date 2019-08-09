import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class LocationItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="well">
            <div class="row">
              <span>{` ${this.props.location.name}`}</span>
              <span>{` ${this.props.location.author}`}</span>
              <span>
                <Link to={"/photos/" + this.props.location.name}>
                  View Photos
                </Link>
              </span>
              <span> view photos link </span>
              <span> delete handler </span>
            </div>
            <div class="row">
              <span>{` ${this.props.location.description}`}</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
