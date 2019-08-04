import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
//import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import Locations from "./Locations";
//import Photos from "./Photos";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/header/";
import locationList from "./components/locationList";
import photoList from "./components/photoList";
import LoginForm from "./components/login";
import PrivateRoute from "./components/privateRoute";

const Router = () => (
  <BrowserRouter>
    <div className="jumbotron">
      <Header />
      <div className="container-fluid">
        <Switch>
          <PrivateRoute path="/locationList" component={Locations} />
          <Route path="/login" component={LoginForm} />
          <Route exact path="/" component={App} />

          <Route path="/location/:location_id" component={photoList} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<Router />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
