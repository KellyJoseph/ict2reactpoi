import React from "react";
import { Route, Redirect } from "react-router-dom";
import Authentication from "../../util/authentication";
import AuthService from "../../util/authentication";

const PrivateRoute = props => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props => {
        return Authentication.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
};
export default PrivateRoute;
