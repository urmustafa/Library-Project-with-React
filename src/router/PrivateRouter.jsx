import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const user = sessionStorage.getItem("user") || false;

  return user ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>
}

export default PrivateRouter