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
        <div>
          <span className="photoitem">
            <span>{` ${this.props.photo.name}`}</span>
            <span>
              <img
                src={`${this.props.photo.url}`}
                alt={`${this.props.photo.title}`}
                className="img-responsive"
              />
            </span>
            <span>{` ${this.props.photo.url}`}</span>
            <span>{` ${this.props.photo._id}`}</span>
          </span>
          <span> view photos link </span>
          <span> edit handler </span>
          <span>
            {" "}
            <button
              type="button"
              className={"button"}
              onClick={this.handleDelete}
            >
              Delete
            </button>{" "}
          </span>
        </div>
      </Fragment>
    );
  }
}
