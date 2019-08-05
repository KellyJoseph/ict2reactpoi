import React, { Component } from "react";
import axios from "axios";
import PhotoCard from "../photoItem";
const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const Id_token = localStorage.getItem("id_token");

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
    this.getPhotos();
    console.log(this.state.photos);
  }

  render() {
    const photoCards = this.state.photos.map((photo, index) => (
      <PhotoCard key={index} photo={photo} />
    ));
    return (
      <div>
        <div>{photoCards}</div>
      </div>
    );
  }
}
