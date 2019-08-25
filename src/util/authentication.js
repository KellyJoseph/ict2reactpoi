import decode from "jwt-decode";
import axios from "axios";

//this file was adapted from an online tutorial,
//(can't find source)

class Authentication {
  constructor() {
    this.baseurl = "https://shrouded-brook-59989.herokuapp.com/api"; // API server domain
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.isAuthenticated = false;
    this.token = undefined;
    this.email = undefined;
    this.error = undefined;
  }

  register(firstname, lastname, email, password) {
    let response = this.fetch(`${this.baseurl}/users`, {
      method: "POST",
      body: JSON.stringify({
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password
      })
    });
    console.log(response);
  }

  login(email, password, cb, errorcb) {
    // Get a token from api server using the fetch api
    return this.fetch(`${this.baseurl}/users/authenticate`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => {
        this.setToken(res.token); // Setting the token in localStorage
        this.isAuthenticated = true;
        console.log("jwt is ", res.token);
        //return Promise.resolve(res);
        cb();
      })
      .catch(err => {
        console.log(err);
        this.error = err.response.status;
        this.isAuthenticated = false;

        errorcb();
      });
  }

  loggedIn() {
    const token = this.getToken(); // GEtting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired. N
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  setToken(idToken) {
    localStorage.setItem("jwt", idToken);
  }

  getToken() {
    return localStorage.getItem("jwt");
  }

  logout() {
    localStorage.removeItem("jwt");
    this.isAuthenticated = false;
  }

  fetch(url, options) {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    if (this.loggedIn()) {
      headers["Authorization"] = "Bearer " + this.getToken();
    }
    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json());
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}

export default new Authentication();
