import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import CountryList from "./Components/CoyntryList";
import { getCountries } from "./reducers/countryReducer";
import Container from "@mui/material/Container";
import CountryView from "./Components/CountryView";
import SearchAppBar from "./Components/AppBar";
import Info from "./Components/Info";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const location = useLocation();

  const currentView =
    location.pathname === "/" ? "allCountries" : "singleCountry";

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <Container maxWidth="lg">
      <SearchAppBar
        searchField={searchField}
        setSearchField={setSearchField}
        currentView={currentView}
      />
      <Routes>
        <Route path="/" element={<CountryList searchField={searchField} />} />
        <Route
          path="/countries/:id"
          element={<CountryView countries={countries} />}
        />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Container>
  );
};

export default App;
