import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Welcome from "./Welcome";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/header/";
//import LocationPage from "./components/LocationPage";
import LocationList from "./components/locationList";
import PhotoList from "./components/photoList";
import LoginForm from "./components/login";
import RegisterForm from "./components/register/";
import PrivateRoute from "./components/privateRoute";

const Router = () => (
  <BrowserRouter>
    <div className="container">
      <Header Navigation={Header} />
      <div className="jumbotron">
        <Switch>
          <PrivateRoute path="/locations" component={LocationList} />
          <Route path="/photos/:locationname" component={PhotoList} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route exact path="/" component={LoginForm} />

          <Route path="/location/:location_id" component={PhotoList} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<Router />, document.getElementById("root"));

serviceWorker.unregister();
