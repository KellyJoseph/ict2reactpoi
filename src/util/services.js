import decode from "jwt-decode";
import axios from "axios";
const jwt = localStorage.getItem("jwt");
const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const headers = {
  Authorization: "Bearer " + jwt
};

export default class Services {
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

  addLocation = (name, description, region, latitude, longitude) => {
    let body = {
      name: name,
      description: description,
      region: region,
      latitude: latitude,
      longitude: longitude,
      author: ""
    };
    axios({
      method: "post",
      url: "https://shrouded-brook-59989.herokuapp.com/api/locations",
      headers: headers,
      data: body
    })
      .then(response => {
        console.log(response);
        this.setState({});
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteLocation(id) {
    axios
      .delete(`${baseurl}/locations/${id}`, {
        headers: headers
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePhoto(id) {
    axios
      .delete(`${baseurl}/photos/${id}`, {
        headers: headers
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
  };
}

/*
  { method: 'GET', path: '/api/locations', config: Locations.find },
  { method: 'GET', path: '/api/locations/{id}', config: Locations.findOne },
  { method: 'POST', path: '/api/locations', config: Locations.create },
  { method: 'DELETE', path: '/api/locations/{id}', config: Locations.deleteOne },
  { method: 'DELETE', path: '/api/locations', config: Locations.deleteAll },

  { method: 'GET', path: '/api/users', config: Users.find },
  { method: 'GET', path: '/api/users/{id}', config: Users.findOne },
  { method: 'POST', path: '/api/users', config: Users.create },
  { method: 'DELETE', path: '/api/users/{id}', config: Users.deleteOne },
  { method: 'DELETE', path: '/api/users', config: Users.deleteAll },
  { method: 'POST', path: '/api/users/authenticate', config: Users.authenticate },

  { method: 'GET', path: '/api/photos', config: Photos.find },
  { method: 'GET', path: '/api/photos/{id}', config: Photos.findOne },
  { method: 'GET', path: '/api/locations/{name}/photos', config: Photos.findByLocation },
  { method: 'POST', path: '/api/locations/{name}/photos', config: Photos.create },
  { method: 'DELETE', path: '/api/photos/{id}', config: Photos.deleteOne },
  { method: 'DELETE', path: '/api/photos', config: Photos.deleteAll },

  { method: 'GET', path: '/api/comments', config: Comments.find },
  { method: 'GET', path: '/api/comments/{id}', config: Comments.findOne },
  { method: 'GET', path: '/api/locations/{name}/comments', config: Comments.findByLocation },
  { method: 'POST', path: '/api/locations/{name}/comments', config: Comments.create },
  { method: 'DELETE', path: '/api/comments/{id}', config: Comments.deleteOne },
  { method: 'DELETE', path: '/api/comments', config: Comments.deleteAll },

  { method: 'GET', path: '/api/ratings', config: Ratings.find },
  { method: 'GET', path: '/api/ratings/{id}', config: Ratings.findOne },
  { method: 'GET', path: '/api/locations/{name}/ratings', config: Ratings.findByLocation },
  { method: 'GET', path: '/api/locations/{name}/ratingsAverage', config: Ratings.getAverageRating },
  { method: 'POST', path: '/api/locations/{name}/ratings', config: Ratings.create },
  { method: 'DELETE', path: '/api/ratings/{id}', config: Ratings.deleteOne },
  { method: 'DELETE', path: '/api/ratings', config: Ratings.deleteAll }
  */
