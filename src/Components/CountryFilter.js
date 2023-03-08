import Input from "@mui/material/Input";
import React from "react";

const CountryFilter = ({ filterField, setFilterField }) => {
  const handleStateChange = (event) => {
    setFilterField(event.target.value);
  };

  return (
    <>
      <input type="text" value={filterField} onChange={handleStateChange} />
    </>
  );
};

export default CountryFilter;
