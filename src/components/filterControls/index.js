import React, { Component } from "react";

export default class FilterControls extends Component {
  handleChange = (e, type, value) => {
    e.preventDefault();
    this.props.onUserInput(type, value);
  };

  handleRegionChange = e => {
    this.handleChange(e, "region", e.target.value);
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-12">
          <h4>
            <span>Filter </span>
            <input
              type="text"
              placeholder="Name Search"
              onChange={this.handleTextChange}
            />
            <span> Gender: </span>
            <select id="gender" onChange={this.handleGenderChange}>
              <option value="all">All</option>
              <option value="North">North</option>
              <option value="North East">North East</option>
              <option value="East">East</option>
              <option value="South East">South East</option>
              <option value="South">South</option>
              <option value="South West">South West</option>
              <option value="West">West</option>
              <option value="North West">North West</option>
            </select>
          </h4>
        </div>
      </div>
    );
  }
}
