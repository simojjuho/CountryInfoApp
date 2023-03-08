import React from "react";
import Pagination from "@mui/material/Pagination";
import { useSelector } from "react-redux";
import { useState } from "react";
import CurrentCountries from "./CurrentCountries";
import CountryFilter from "./CountryFilter";

const CountryList = () => {
  const [itemOffset, setItemOffset] = useState(1);
  const [filterField, setFilterField] = useState("");

  const ItemsPerPage = 5;
  const countries = useSelector((state) => state.countries);
  const countriesToShow = () =>
    countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(filterField.toLowerCase());
    });

  const pageCount = Math.ceil(countriesToShow().length / 5);

  const endOffSet = itemOffset + ItemsPerPage;
  const currentCountries = countriesToShow().slice(itemOffset, endOffSet);

  const handlePageClick = (event, value) => {
    const newOffSet =
      ((value * ItemsPerPage) % countriesToShow().length) - ItemsPerPage;

    setItemOffset(newOffSet);
  };

  return (
    <>
      <CountryFilter
        filterField={filterField}
        setFilterField={setFilterField}
      />
      <CurrentCountries currentCountries={currentCountries} />
      <Pagination count={pageCount} onChange={handlePageClick} />
    </>
  );
};

export default CountryList;
