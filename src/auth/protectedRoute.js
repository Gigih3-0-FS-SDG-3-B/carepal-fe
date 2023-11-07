import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

export default function ProtectedRoutes() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
