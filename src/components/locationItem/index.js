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
          <div className="card">
            <div className="card-header">
              <span>{` ${this.props.location.name}`}</span>
            </div>
            <div class="card-body">
              <div className="row">
                <span>{`Posted by ${this.props.location.author}`}</span>
              </div>
              <div className="row">
                <span>{` ${this.props.location.description}`}</span>
              </div>
            </div>
            <div className="card-footer">
              <button
                type="button"
                id="delete-button"
                className={"button"}
                onClick={this.handleDelete}
              >
                Delete
              </button>
              <Link to={"/photos/" + this.props.location.name}>
                <button type="button" id="photos">
                  View Photos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
