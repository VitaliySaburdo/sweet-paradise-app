import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/authSelectors';

interface PrivateRouteProps {
  redirectTo: string;
  component: React.ComponentType;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, redirectTo = '/' }) => {
  const navigate = useNavigate();
  const isLogin = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (!isLogin && !isRefreshing) {
    navigate(redirectTo);
    return null;
  }

  return React.createElement(Component);
};


