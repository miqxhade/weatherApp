import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

import React from 'react'

const LogoutButton = () => {
    const {logout ,isAuthenticated} = useAuth0();
  return (  
    isAuthenticated &&(
        <Button variant="contained" onClick={() =>logout()}>
            Sign Out
        </Button>
    )

  )
}

export default LogoutButton