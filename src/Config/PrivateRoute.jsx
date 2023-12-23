import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, ...props }) {
  const validateUser = () => {
    const authenticated = true;
    // const authenticated = localStorage.getItem("authenticated");

    if (!authenticated) {
      alert("O usuário não está autenticado");
      return false;
    }

    return authenticated;
  };

  return validateUser() ? (
    children
  ) : (
    <Navigate
      replace
      to={{
        pathname: "/login",
        state: { from: props.location },
      }}
    />
  );
}
