import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Welcome from "./Welcome";
//import Locations from "./Locations";
//import Photos from "./Photos";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/header/";
import LocationList from "./components/locationList";
import PhotoList from "./components/photoList";
import LoginForm from "./components/login";
import RegisterForm from "./components/register/";
import PrivateRoute from "./components/privateRoute";

const Router = () => (
  <BrowserRouter>
    <div className="jumbotron">
      <Header Navigation={Header} />
      <div className="container-fluid">
        <Switch>
          <PrivateRoute path="/locations" component={LocationList} />
          <Route path="/photos/:locationname" component={PhotoList} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route exact path="/" component={Welcome} />

          <Route path="/location/:location_id" component={PhotoList} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<Router />, document.getElementById("root"));

serviceWorker.unregister();
