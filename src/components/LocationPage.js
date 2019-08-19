import React, { Component } from "react";
import LocationList from "./locationList";
import LocationForm from "./LocationForm/";
import Service from "../util/services";
import _ from "lodash";
import axios from "axios";
const Id_token = localStorage.getItem("id_token");

const services = new Service();

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

  addLocation = (name, description, region, latitude, longitude) => {
    let body = {
      name: name,
      description: description,
      region: region,
      latitude: latitude,
      longitude: longitude,
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
        this.setState({});
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteLocation = id => {
    services.deleteLocation(id);
    this.setState({}); //trigger re rendering without actually altering the state
  };

  componentDidMount() {
    this.getLocations();
  }

  render() {
    let locations = this.state.locations;
    console.log(this.state.locations, locations);
    return (
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="header">
            <div className="col-md-6 offset-3">
              <h1>Locations</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 ">
              <LocationForm addLocation={this.addLocation} />
            </div>

            <div className="col-md-8">
              <LocationList
                locations={locations}
                deleteLocation={this.deleteLocation}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
