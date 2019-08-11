import React, { Component } from "react";
import axios from "axios";
const Id_token = localStorage.getItem("id_token");
const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const headers = {
  Authorization: "Bearer " + Id_token
};
export default class LocationForm extends Component {
  state = {
    name: "",
    description: "",
    region: "",
    latitude: "",
    longitude: "",
    author: ""
  };

  handleNameChange = e => this.setState({ name: e.target.value });
  handleDescriptionChange = e => this.setState({ description: e.target.value });
  handleRegionChange = e => this.setState({ region: e.target.value });
  handleLatitudeChange = e => this.setState({ latitude: e.target.value });
  handleLongitudeChange = e => this.setState({ longitude: e.target.value });

  addLocation = () => {
    let body = {
      name: this.state.name,
      description: this.state.description,
      region: this.state.region,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      author: ""
    };
    axios({
      method: "post",
      url: "https://shrouded-brook-59989.herokuapp.com/api/locations",
      headers: headers,
      data: body
    })
      .then(response => {
        console.log(response);
        //this.setState({ locations: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    //this.props.handleAdd(this.state.name, this.state.description, this.state.region, this.state.latitude, this.state.longitude);
    this.addLocation();

    this.setState({ name: "", description: "", region: "" });
  };

  render() {
    return (
      <form className="form bg-dark text-light">
        <h3>Add a Location</h3>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Region"
            value={this.state.region}
            onChange={this.handleRegionChange}
          />
        </div>{" "}
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Lat"
            value={this.state.latitude}
            onChange={this.handleLatitudeChange}
          />
        </div>{" "}
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="long"
            value={this.state.longitude}
            onChange={this.handleLongitudeChange}
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
