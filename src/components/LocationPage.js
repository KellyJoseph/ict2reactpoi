import React, { Component } from "react";
import LocationList from "./locationList";
import LocationForm from "./LocationForm/";
import Service from "../util/services";
import _ from "lodash";
import axios from "axios";
const jwt = localStorage.getItem("jwt");
const services = new Service();

const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const headers = {
  Authorization: "Bearer " + jwt
};

export default class LocationPage extends Component {
  state = {
    locations: [],
    jwt: ""
  };

  async componentDidMount() {
    this.state.jwt = localStorage.getItem("jwt");
    //getLocations initially queried localStorage for JWT. getLocations was triggered
    //after the login response was returned but before finishing  writing the JWT to
    //localStorage this caused prolems for tests
    this.getLocations();
  }

  getLocations() {
    axios
      .get(`${baseurl}/locations`, {
        headers: {
          Authorization: "Bearer " + this.state.jwt
        }
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
      headers: {
        Authorization: "Bearer " + this.state.jwt
      },
      data: body
    })
      .then(response => {
        console.log(response);
        //this.setState({ locations: response.data });
        this.setState({
          locations: this.state.locations.concat(response.data)
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteLocation = id => {
    axios
      .delete(`${baseurl}/locations/${id}`, {
        headers: {
          Authorization: "Bearer " + this.state.jwt
        }
      })
      .then(response => {
        console.log(response);
        this.setState({
          locations: this.state.locations.filter(
            location => location._id !== id
          )
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

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
              <LocationForm
                addLocation={this.addLocation}
                reRender={this.rerender}
              />
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
