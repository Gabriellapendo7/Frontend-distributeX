import React from 'react';
import { useAuth } from './AuthContext';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
