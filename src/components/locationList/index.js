import React, { Component } from "react";
import LocationCard from "../locationItem";

export default class LocationList extends Component {
  render() {
    const locationCards = this.props.locations.map((location, index) => (
      <LocationCard
        key={index}
        location={location}
        deleteLocation={this.props.deleteLocation}
      />
    ));
    return (
      <div>
        <div>{locationCards}</div>
      </div>
    );
  }
}
