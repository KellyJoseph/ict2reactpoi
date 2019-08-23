import React, { Component } from "react";
import axios from "axios";
import PhotoCard from "../photoItem";
const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const jwt = localStorage.getItem("jwt");

const headers = {
  Authorization: "Bearer " + jwt
};
export default class PhotoList extends Component {
  render() {
    const photoCards = this.props.photos.map((photo, index) => (
      <PhotoCard
        key={index}
        photo={photo}
        deletePhoto={this.props.deletePhoto}
      />
    ));
    console.log(this.props.photos);
    return (
      <div>
        <div>{photoCards}</div>
      </div>
    );
  }
}
