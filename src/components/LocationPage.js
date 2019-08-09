import React, { Component } from "react";
import LocationList from "./locationList";
//import LocationForm from "./LocationForm/";
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

  addLocation() {}

  deleteLocation() {}

  componentDidMount() {
    this.getLocations();
    //response = functions.getLocations2();
    //this.setState({ locations2: response.data});
  }

  render() {
    let locations = this.state.locations;
    return (
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-3">
              <h1>
                <a href="/">Hacker News</a>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 " />
            <div className="col-md-8">
              <LocationList
                locations={locations}
                deleteHandler={this.deleteLocation}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
