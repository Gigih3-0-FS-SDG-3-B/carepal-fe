import React from "react";
import { Route, Navigate } from "react-router-dom";
import validateToken from "./JWTValidation";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token && validateToken(token);
  };
	console.log(isAuthenticated());
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
