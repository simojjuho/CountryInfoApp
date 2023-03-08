import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import CountryList from "./Components/CoyntryList";
import { getCountries } from "./reducers/countryReducer";
import Container from "@mui/material/Container";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <Container maxWidth="lg">
      <Router>
        <Link to={"/"}>countries</Link>
        <Link to={"/info"}>info</Link>

        <Routes>
          <Route path="/" element={<CountryList />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
