import { BrowserRouter } from "react-router-dom";
import { LandingRoute } from "./Routes/LandingRoute";
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  return (
    //routes for the application
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <LandingRoute />
      </Auth0Provider>
    </BrowserRouter>
  );
};

export default App;
