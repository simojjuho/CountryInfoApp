import React from "react";

const CurrentCountries = ({ currentCountries }) => {
  return (
    <ul>
      {currentCountries.map((country) => {
        return <li key={country.cca2}>{country.name.official}</li>;
      })}
    </ul>
  );
};

export default CurrentCountries;
