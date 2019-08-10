import React, { Component } from "react";
import PhotoCard from "../components/photoItem";
import PhotoList from "../components/photoList";
import axios from "axios";
const Id_token = localStorage.getItem("id_token");

const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const headers = {
  Authorization: "Bearer " + Id_token
};

export default class PhotoPage extends Component {
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
        console.log(response.data);
        this.setState({ photos: response.data });
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
  deleteLocation(id) {
    console.log("delete button was pressed");
  }

  componentDidMount() {
    this.state.photos = this.getPhotos();
    console.log(this.state.photos);
  }

  render() {
    let photos = this.state.photos;
    return (
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-3">
              <h1>
                <p>Photo List</p>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 " />
            <div className="col-md-8">
              <PhotoList photos={photos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
