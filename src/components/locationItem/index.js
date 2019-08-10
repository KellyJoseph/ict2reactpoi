import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class LocationItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="well">
            <div className="row">
              <span>{` ${this.props.location.name}`}</span>
              <span>{` ${this.props.location.author}`}</span>
              <span>
                <Link to={"/photos/" + this.props.location.name}>
                  <button type="button">View Photos</button>
                </Link>
              </span>
              <button
                type="button"
                className={"button"}
                onClick={this.props.deleteHandler(this.props.location._id)}
              >
                Delete
              </button>
            </div>
            <div className="row">
              <span>{` ${this.props.location.description}`}</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
