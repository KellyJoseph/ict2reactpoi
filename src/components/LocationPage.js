import React, { Component } from "react";
import LocationList from "./locationList";
import LocationForm from "./LocationForm/";
import _ from "lodash";
import axios from "axios";
const Id_token = localStorage.getItem("id_token");

const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const headers = {
  Authorization: "Bearer " + Id_token
};

export default class LocationPage extends Component {
  state = {
    locations: []
  };

  getLocations() {
    axios
      .get(`${baseurl}/locations`, {
        headers: headers
      })
      .then(response => {
        console.log(response);
        this.setState({ locations: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteLocation(id) {
    axios
      .delete(`${baseurl}/locations/${id}`, {
        headers: headers
      })
      .catch(error => {
        console.log(error);
      });
  }

  //  { method: 'POST', path: '/api/locations', config: Locations.create },
  addLocation() {
    console.log("add button was pressed");
  }
  //   { method: 'DELETE', path: '/api/locations/{id}', config: Locations.deleteOne },

  componentDidMount() {
    this.getLocations();
  }

  render() {
    let locations = this.state.locations;
    return (
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-3">
              <h1>
                <p>Location List</p>
              </h1>
            </div>
          </div>
          <div className="body">
            <div className="column" />
            <LocationForm />
          </div>
          <div className="column">
            <LocationList
              locations={locations}
              deleteHandler={this.deleteLocation}
            />
          </div>
        </div>
      </div>
    );
  }
}
