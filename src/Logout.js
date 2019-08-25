import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Authentication from "./util/authentication";

class Welcome extends Component {
  async componentDidMount() {
    Authentication.logout();
  }
  render() {
    return (
      <fragment>
        <h1 class="title">Come back soon!!</h1>
      </fragment>
    );
  }
}
export default withRouter(Welcome);
