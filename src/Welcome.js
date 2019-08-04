import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

class Welcome extends Component {
  render() {
    return <div>This is gonna be the welcome page</div>;
  }
}
export default withRouter(Welcome);
