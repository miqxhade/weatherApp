import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopNavigation from "../Navigations/Header/View/TopNavigation";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Weather = () => {
  const { state } = useLocation();
  const { city } = state;
  const [main, setMain] = useState("");
  const [description, setDescription] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [pressure, setPressure] = useState("");
  const [date, setDate] = useState(moment().format("MM/DD/YYYY"));
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:650px)");
  const WeatherToday = () => {
    const cityName = city;
    const weatherKey = process.env.REACT_APP_OPENWEATHER_KEY;

    axios({
      // Endpoint to send files
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&appid=" +
        weatherKey,
      method: "GET",
    })
      // Handle the response from backend here
      .then((res) => {
        // set the params needed for table
        console.log(res.data);
        setMain(res.data.weather[0].main);
        setDescription(res.data.weather[0].description);
        setTemp(res.data.main.temp);
        setHumidity(res.data.main.humidity);
        setPressure(res.data.main.pressure);
      })

      // Catch errors if any
      .catch((err) => {});
  };

  useEffect(() => {
    WeatherToday();
  }, []);

  return (
    <>
      <TopNavigation />
      {/*table can be used for array data but for this purpose we use set data */}
      {matches && (
        <div style={{ padding: 50, padding: 200, padding: 200 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableCell colSpan={6}>Date</TableCell>
                <TableRow>
                  <TableCell>(mm/dd/yyyy)</TableCell>
                  <TableCell align="right">Temp(F)</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Main</TableCell>
                  <TableCell align="right">Pressure</TableCell>
                  <TableCell align="right">Humidity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {date}
                  </TableCell>
                  <TableCell align="right">{temp}</TableCell>
                  <TableCell align="right">{description}</TableCell>
                  <TableCell align="right">{main}</TableCell>
                  <TableCell align="right">{pressure}</TableCell>
                  <TableCell align="right">{humidity}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            style={{marginTop: 100 }}
          >
            <Button variant="contained" onClick={() => navigate(-1)}>
              Back
            </Button>
          </Box>
        </div>
      )}
      {!matches && (
        <div style={{ padding: 40, padding: 10, padding: 10 }}>
          <TableContainer com ponent={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>(mm/dd/yyyy)</TableCell>
                  <TableCell align="right">Temp(F)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {date}
                  </TableCell>
                  <TableCell align="right">{temp}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            style={{marginTop: 100 }}
          >
            <Button variant="contained" onClick={() => navigate(-1)}>
              Back
            </Button>
          </Box>
        </div>
      )}
    </>
  );
};
