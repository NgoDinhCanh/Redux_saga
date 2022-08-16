import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { Route, RoutesProps } from 'react-router-dom';

export interface PrivateRouteProps {}

export function PrivateRoute(props: RoutesProps) {
  const isLoggedIn = Boolean(localStorage.getItem('token'));
  if (!isLoggedIn) return <Navigate to="/login" />;
  return <Route {...props} />;
}
