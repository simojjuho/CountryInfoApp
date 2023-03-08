import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Link as RouterLink,
  Route,
  Routes,
} from "react-router-dom";
import CountryList from "./Components/CoyntryList";
import { getCountries } from "./reducers/countryReducer";
import Container from "@mui/material/Container";
import CountryView from "./Components/CountryView";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

const App = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <Container maxWidth="lg">
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={RouterLink} to="/">
              countries
            </Button>
            <Button color="inherit" component={RouterLink} to="/info">
              info
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route
            path="/countries/:id"
            element={<CountryView countries={countries} />}
          />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
