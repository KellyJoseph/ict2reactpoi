import React, { Component } from "react";
import LocationCard from "../locationCard";
import Services from "../../util/services";
import axios from "axios";
const Id_token = localStorage.getItem("id_token");

const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const headers = {
  Authorization: "Bearer " + Id_token
};

const functions = new Services();

export default class LocationList extends Component {
  state = {
    locations2: []
  };

  getLocations() {
    axios
      .get(`${baseurl}/locations`, {
        headers: headers
      })
      .then(response => {
        console.log(response);
        this.setState({ locations2: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getLocations();
  }

  render() {
    //const locationCards = this.props.locations.map((location, index) => (
    const locationCards = this.state.locations2.map((location, index) => (
      <LocationCard key={index} location={location} />
    ));
    return (
      <div>
        <div>{locationCards}</div>
      </div>
    );
  }
}
/*
 /*
  componentDidMount() {
    this.getLocations();
  }
  async getLocations() {
    await axios
      .get("https://shrouded-brook-59989.herokuapp.com/api/locations", {
        headers: headers
      })
      .then(data => this.setState({ locations: data }))
      .catch(err => {
        console.log(err);
        return null;
      });
  }
  */
