import * as React from "react";
import CloudIcon from "@mui/icons-material/Cloud";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginButton from "../../../../components/LoginButton";
import LogoutButton from "../../../../components/LogoutButton";

export default function TopNavigation() {

  

  return (
    <>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CloudIcon sx={{fontSize:40}}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Weather Forecast
          </Typography>
          <LogoutButton/>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}
