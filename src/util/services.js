import decode from "jwt-decode";
import axios from "axios";
const Id_token = localStorage.getItem("id_token");
const baseurl = "https://shrouded-brook-59989.herokuapp.com/api";
const headers = {
  Authorization: "Bearer " + Id_token
};

export default class Services {
  async getLocations() {
    try {
      const response = await axios.get(`${baseurl}/locations`, {
        headers: headers
      });
      console.log("status is", response.status);
      return response.status;
    } catch (error) {
      console.error(error);
    }
  }

  async getPhotos() {
    try {
      const response = await axios.get(`${baseurl}/photos`, {
        headers: { Authorization: `JWT ${Id_token}` }
      });
      console.log(response.content);
      return response.content;
    } catch (error) {
      console.error(error);
    }
  }

  async getUsers() {
    try {
      const response = await axios.get(`${baseurl}/users`, {
        headers: { Authorization: `JWT ${Id_token}` }
      });
      console.log(response.content);
      return response.content;
    } catch (error) {
      console.error(error);
    }
  }

  async getComments() {
    try {
      const response = await axios.get(`${baseurl}/comments`, {
        headers: { Authorization: `JWT ${Id_token}` }
      });
      console.log(response.content);
      return response.content;
    } catch (error) {
      console.error(error);
    }
  }
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
