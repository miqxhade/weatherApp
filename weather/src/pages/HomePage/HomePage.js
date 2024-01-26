import React, { useState } from "react";
import TopNavigation from "../Navigations/Header/View/TopNavigation";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from '@mui/material/useMediaQuery';

export const HomePage = () => {
  let navigate = useNavigate();
  const { user } = useAuth0();
  const [city, setCity] = useState('');
  
  const handleSubmit = () => {
    console.log(city)
    navigate("/Weather", { state: { city: city, color: 'green' } });
  };

  const matches = useMediaQuery('(min-width:650px)');
  return ( 
    <>
      <TopNavigation />
      <div style={{ textAlign: "center", margin: 10 }}>
        {console.log(user)}
        {matches && (
         <div>
         {user?.picture && (
           <img
             src={user.picture}
             alt={user.name}
             style={{ width: "200px" }}
           />
         )}
         <p>{user.name}</p>
         <p>https://github.com/{user.name}</p>
       </div>
        )}

        <div style={{ margin: 10 }}>
          <FormControl>
            <TextField
              size="small"
              placeholder="City"
              value={city}
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              onChange={event => setCity(event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </div>
        <div style={{ margin: 10 }}>
          <Button
            variant="contained"
            title="Search"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Display Weather
          </Button>
        </div>
      </div>
    </>
  );
};
