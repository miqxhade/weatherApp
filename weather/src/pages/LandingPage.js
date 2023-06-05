import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import TopNavigation from "./Navigations/Header/View/TopNavigation";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function LandingPage() {
  const { user, isAuthenticated } = useAuth0();
  const matches = useMediaQuery("(min-width:650px)");
  let navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Homepage");
    }
  }, [isAuthenticated]);

  return (
    <>
      <TopNavigation />
      {matches && (
        <Container style={{width: 600}}>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ textAlign: "justify", width: 600, marginTop: 20 }}
            >
              Welcome to the weather forecast web application. Please Login with
              your Github user to use the application and view the weather in
              your city.
            </Typography>
          </div>

          <Box
            m={1}
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            style={{ marginTop: 100 }}
          >
            <LoginButton />
          </Box>
        </Container>
      )}
      {!matches && (
        <Container>
          <Typography sx={{ textAlign: "left", justifyItems: "left" }}>
            Welcome to the weather forecast web application. Please Login with
            your Github user to use the application and view the weather in your
            city.
          </Typography>
          <Box style={{ marginTop: 60 }}>
            <LoginButton />
          </Box>
        </Container>
      )}
    </>
  );
}
