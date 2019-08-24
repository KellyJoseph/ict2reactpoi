import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class photoItem extends Component {
  state = {
    _id: this.props.photo._id
  };
  handleDelete = () => this.props.deletePhoto(this.state._id);

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <span>{` ${this.props.photo.title}`}</span>
            </div>
            <div className="card-body">
              <span>
                <img
                  src={`${this.props.photo.url}`}
                  alt={`${this.props.photo.title}`}
                  className="img-responsive"
                  resizeMode="contain"
                />
              </span>
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
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
