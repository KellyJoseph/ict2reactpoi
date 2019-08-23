import React, { Component } from "react";
import axios from "axios";
const jwt = localStorage.getItem("jwt");
const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const headers = {
  Authorization: "Bearer " + jwt
};
export default class PhotoForm extends Component {
  state = {
    title: "",
    selectedFile: null,
    location: this.props.locationName
  };

  handleTitleChange = e => this.setState({ title: e.target.value });
  handleFileChange = e =>
    this.setState({
      selectedFile: e.target.files[0]
    });

  handleSubmit = e => {
    e.preventDefault();
    this.props.addPhoto(
      this.state.title,
      this.state.location,
      this.state.selectedFile
    );
    this.setState({ title: "", selectedFile: null });
  };

  render() {
    return (
      <form className="form">
        <h3>Add a Photo</h3>
        <div className="form-group">
          <input
            type="file"
            placeholder="Name"
            value={this.state.file}
            onChange={this.handleFileChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Add
        </button>
      </form>
    );
  }
}
