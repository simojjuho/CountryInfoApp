import Input from "@mui/material/Input";
import React from "react";

const CountryFilter = ({
  filterField,
  setFilterField,
  setItemOffset,
  setPage,
}) => {
  const handleStateChange = (event) => {
    setFilterField(event.target.value);
    setItemOffset(0);
    setPage(1);
  };

  return (
    <>
      <input type="text" value={filterField} onChange={handleStateChange} />
    </>
  );
};

export default CountryFilter;
