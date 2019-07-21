import axios from "axios";

class Authentication {
  constructor() {
    this.isAuthenticated = false;
    this.token = undefined;
    this.username = undefined;
    this.error = undefined;
  }

  authenticate(username, password, cb, errorcb) {
    axios
      .post("http://localhost:8085/auth", {
        identifier: username,
        password: password
      })
      .then(res => {
        this.isAuthenticated = true;
        this.token = res.data.token;
        this.username = username;
        this.error = undefined;
        cb();
      })
      .catch(err => {
        this.error = err.response.status;
        errorcb();
      });
  }

  signout(cb) {
    this.isAuthenticated = false;
    this.username = undefined;
    this.tolen = undefined;
    this.error = undefined;
    cb();
  }
}

export default new Authentication();
