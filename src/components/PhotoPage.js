import React, { Component } from "react";
import PhotoForm from "..//components/photoForm";
import PhotoList from "../components/photoList";
import axios from "axios";
import Service from "../util/services";
const services = new Service();

const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
let jsonWebToken;

export default class PhotoPage extends Component {
  state = {
    photos: [],
    locationname: this.props.match.params.locationname
  };

  getPhotos() {
    axios
      .get(`${baseurl}/locations/${this.state.locationname}/photos`, {
        headers: {
          Authorization: "Bearer " + jsonWebToken
        }
      })
      .then(response => {
        console.log(response.data);
        this.setState({ photos: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePhoto = id => {
    axios
      .delete(`${baseurl}/photos/${id}`, {
        headers: {
          Authorization: "Bearer " + jsonWebToken
        }
      })
      .then(response => {
        console.log(response);
        this.setState({
          photos: this.state.photos.filter(photo => photo._id !== id)
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  addPhoto = (title, location, file) => {
    const fd = new FormData();
    fd.append("title", title);
    fd.append("location", location);
    fd.append("file", file);
    axios({
      method: "post",
      const: baseurl,
      url: `${baseurl}/locations/${location}/photos`,
      headers: {
        Authorization: "Bearer " + jsonWebToken
      },
      data: fd
    })
      .then(response => {
        console.log(response);
        this.setState({
          photos: this.state.photos.concat(response.data)
        });
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({});
  };

  componentDidMount() {
    jsonWebToken = localStorage.getItem("jwt");
    this.state.photos = this.getPhotos();
    //this.state.photos = services.getPhotos(this.state.locationname);
    console.log(this.state.photos);
  }

  render() {
    let locationName = this.props.match.params.locationname;
    let photos = this.state.photos;
    return (
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-3">
              <h1> {` ${this.state.locationname}`} Photos</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 ">
              <PhotoForm locationName={locationName} addPhoto={this.addPhoto} />
            </div>

            <div className="col-md-8">
              <PhotoList photos={photos} deletePhoto={this.deletePhoto} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
