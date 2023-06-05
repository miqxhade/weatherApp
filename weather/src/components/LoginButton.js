import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

import React from 'react'

const LoginButton = () => {
    const {loginWithRedirect ,isAuthenticated} = useAuth0();
  return (
  
    !isAuthenticated &&(
        <Button variant="contained" onClick={() =>loginWithRedirect()}>
            Sign in
        </Button>
    )

  )
}

export default LoginButton