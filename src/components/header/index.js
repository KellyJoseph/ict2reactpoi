import React, { Component } from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap/";
import { Link, NavLink } from "react-router-dom";

export default class Form extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink class="nav-item" to="/welcome">
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-item" to="/locations">
              Locations
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-item" to="/login">
              Log In
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-item" to="/register">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
