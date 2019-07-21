import React, { Component } from "react";
import LocationCard from "../locationCard";
export default class LocationList extends Component {
  render() {
    const locationCards = this.props.locations.map((location, index) => (
      <LocationCard key={index} location={location} />
    ));
    return (
      <div>
        <div>{locationCards}</div>
      </div>
    );
  }
}
