import React, { Component } from "react";
//import logo from "./logo.svg";
import LocationList from "./components/locationList";
import "./App.css";
import api from "./datastore/stubAPI";
import _ from "lodash";
export default class App extends Component {
  incrementUpvote = id => {
    api.upvote(id);
    this.setState({}); //re render the app
  };
  addLocation = (name, description, author, region) => {
    api.add(name, description, author, region);
    this.setState({});
  };

  render() {
    let locations = api.getAll();

    return (
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-3">
              <h1>Locations</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ">Insert form to add location here</div>
            <div className="col-md-8">
              <LocationList locations={locations} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
