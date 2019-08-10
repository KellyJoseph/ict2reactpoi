import React, { Component } from "react";
import axios from "axios";
import PhotoCard from "../photoItem";
const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const Id_token = localStorage.getItem("id_token");

const headers = {
  Authorization: "Bearer " + Id_token
};
export default class PhotoList extends Component {
  render() {
    const photoCards = this.props.photos.map((photo, index) => (
      <PhotoCard key={index} photo={photo} />
    ));
    console.log(this.props.photos);
    return (
      <div>
        <div>{photoCards}</div>
      </div>
    );
  }
}
