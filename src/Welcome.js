import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import map from "../src/images/old-map.jpg";
const jwt = localStorage.getItem("jwt");
if (jwt != null) {
  console.log(jwt);
}

class Welcome extends Component {
  render() {
    return (
      <fragment>
        <h1 class="title">Welcome to ICT2 Assignment 2 POI React App</h1>
        <div>
          <img src={map} />
        </div>
      </fragment>
    );
  }
}
export default withRouter(Welcome);
