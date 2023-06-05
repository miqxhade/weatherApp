import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { isLogin } from '../stores/AuthenticationStore';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoutes = () => {
const {user,isAuthenticated} = useAuth0();
    let auth = isLogin((state) => state.status);

    return isAuthenticated ? (
        <Outlet />
    ) : (
      <Navigate to="/" />
    );
}

export default PrivateRoutes