import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./auth_exe";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Component {...props} /> : <Navigate to="/" />;
      }}
    ></Route>
  );
}
