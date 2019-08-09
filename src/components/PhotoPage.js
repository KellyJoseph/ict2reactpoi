import React, { Component } from "react";
import PhotoCard from "../components/photoItem";
import PhotoList from "../components/photoList";
import Services from "../../util/services";
import axios from "axios";
const Id_token = localStorage.getItem("id_token");

const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const headers = {
  Authorization: "Bearer " + Id_token
};

export default class PhotoList extends Component {
  state = {
    photos: []
  };

  getPhotos() {
    axios
      .get(
        `${baseurl}/locations/${this.props.match.params.locationname}/photos`,
        {
          headers: headers
        }
      )
      .then(response => {
        console.log(response);
        this.setState({ photos: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    //const locationCards = this.props.locations.map((location, index) => (
    const photoCards = this.state.photos.map((photo, index) => (
      <PhotoCard key={index} location={photo} />
    ));
    return (
      <div className="container">
        <div className="row">
          <div>{photoCards}</div>
        </div>
      </div>
    );
  }
}
