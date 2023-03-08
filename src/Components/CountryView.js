import React from "react";
import { useParams } from "react-router-dom";

const CountryView = ({ countries }) => {
  const id = useParams().id;
  const country = countries.find((country) => {
    return country.cca2 === id;
  });

  return <h2>{country.name.official}</h2>;
};

export default CountryView;
