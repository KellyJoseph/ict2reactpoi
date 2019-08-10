import React, { Component } from "react";
import LocationCard from "../locationItem";
import Services from "../../util/services";
import axios from "axios";
const Id_token = localStorage.getItem("id_token");

const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const headers = {
  Authorization: "Bearer " + Id_token
};

export default class LocationList extends Component {
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

  render() {
    const locationCards = this.props.locations.map((location, index) => (
      <LocationCard
        key={index}
        location={location}
        deleteHandler={this.props.deleteHandler}
      />
    ));
    return (
      <div>
        <div>{locationCards}</div>
      </div>
    );
  }
}
