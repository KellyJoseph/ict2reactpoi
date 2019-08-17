import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class LocationItem extends Component {
  state = {
    _id: this.props.location._id
  };
  handleDelete = () => this.props.deleteLocation(this.state._id);

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="well">
            <div className="row">
              <span>{` ${this.props.location.name}`}</span>
              <span>{`Author is ${this.props.location.author}`}</span>
              <span>{`Location _id is ${this.props.location._id}`}</span>
              <span>
                <Link to={"/photos/" + this.props.location.name}>
                  <button type="button">View Photos</button>
                </Link>
              </span>
              <button
                type="button"
                className={"button"}
                onClick={this.handleDelete}
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
