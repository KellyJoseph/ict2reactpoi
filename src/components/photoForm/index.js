import React, { Component } from "react";
import axios from "axios";
const Id_token = localStorage.getItem("id_token");
const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const headers = {
  Authorization: "Bearer " + Id_token
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
    //this.props.handleAdd(this.state.name, this.state.description, this.state.region, this.state.latitude, this.state.longitude);
    const fd = new FormData();
    fd.append("title", this.state.title);
    fd.append("location", this.props.locationName);
    fd.append("file", this.state.selectedFile);
    axios({
      method: "post",
      const: baseurl,
      url: `${baseurl}/locations/${this.props.locationName}/photos`,
      headers: headers,
      data: fd
    })
      .then(response => {
        console.log(response);
        //this.setState({ locations: response.data });
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({ title: "", selectedFile: null });
  };

  render() {
    return (
      <form className="form">
        <h3>Add a Location</h3>
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
