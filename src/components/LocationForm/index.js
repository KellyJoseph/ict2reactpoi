import React, { Component } from "react";
import axios from "axios";
const jwt = localStorage.getItem("jwt");
const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const headers = {
  Authorization: "Bearer " + jwt
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

  //handleRegionChange = e => this.setState({ gender: e.target.value )};

  handleSubmit = e => {
    e.preventDefault();
    //this.props.handleAdd(this.state.name, this.state.description, this.state.region, this.state.latitude, this.state.longitude);
    this.props.addLocation(
      this.state.name,
      this.state.description,
      this.state.region,
      this.state.latitude,
      this.state.longitude
    );

    this.setState({ name: "", description: "", region: "" });
  };

  render() {
    return (
      <form className="form">
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
          <select id="gender" onChange={this.handleRegionChange}>
            <option value="North">North</option>
            <option value="North East">North East</option>
            <option value="East">East</option>
            <option value="South East">South East</option>
            <option value="South">South</option>
            <option value="South West">South West</option>
            <option value="West">West</option>
            <option value="North West">North West</option>
          </select>
        </div>
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
