import React, { Component } from "react";
import PhotoForm from "..//components/photoForm";
import PhotoList from "../components/photoList";
import axios from "axios";
import Service from "../util/services";
const Id_token = localStorage.getItem("id_token");
const services = new Service();

const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const headers = {
  Authorization: "Bearer " + Id_token
};

export default class PhotoPage extends Component {
  state = {
    photos: [],
    locationname: this.props.match.params.locationname
  };

  getPhotos() {
    axios
      .get(`${baseurl}/locations/${this.state.locationname}/photos`, {
        headers: headers
      })
      .then(response => {
        console.log(response.data);
        this.setState({ photos: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addPhoto = (title, location, file) => {
    const fd = new FormData();
    fd.append("title", title);
    fd.append("location", location);
    fd.append("file", file);
    axios({
      method: "post",
      const: baseurl,
      url: `${baseurl}/locations/${location}/photos`,
      headers: headers,
      data: fd
    })
      .then(response => {
        console.log(response);
        //this.setState({ locations: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({});
  };

  componentDidMount() {
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
              <h1>
                <p>Photo List</p>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 " />
            <PhotoForm
              locationName={locationName}
              addPhoto={services.addPhoto}
            />
            <div className="col-md-8">
              <PhotoList photos={photos} deletePhoto={services.deletePhoto} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
