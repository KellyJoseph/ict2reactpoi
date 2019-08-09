import React, { Component } from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap/";
import { Link, NavLink } from "react-router-dom";

export default class Form extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="navbar-brand text-white">
            <NavLink className="navbar-brand text-white" to="/welcome">
              Home
            </NavLink>
          </li>

          <li class="navbar-brand">
            <NavLink className="navbar-brand text-white" to="/locations">
              Locations
            </NavLink>
          </li>
          <li class="navbar-brand">
            <NavLink className="navbar-brand text-white" to="/login">
              Log In
            </NavLink>
          </li>
          <li class="navbar-brand">
            <NavLink className="navbar-brand text-white" to="/register">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
