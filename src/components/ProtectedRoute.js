// src/components/ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => !!state.user.token);

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? <Component {...rest} /> : <Navigate to="/signin" />
      }
    />
  );
};

export default ProtectedRoute;
