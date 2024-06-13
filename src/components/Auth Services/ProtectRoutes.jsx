import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectRoutes() {
  const auth = localStorage.getItem("loggedIn");

  return auth ? <Outlet /> : <Navigate to={("/login", { replace: true })} />;
}

export default ProtectRoutes;
