import React from "react";
import Pagination from "@mui/material/Pagination";
import { useSelector } from "react-redux";
import { useState } from "react";
import CurrentCountries from "./CurrentCountries";
import CountryFilter from "./CountryFilter";

const CountryList = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [filterField, setFilterField] = useState("");
  const [page, setPage] = useState(1);

  const ItemsPerPage = 5;
  const countries = useSelector((state) => state.countries);
  const countriesToShow = () =>
    countries.filter((country) => {
      return country.name.official
        .toLowerCase()
        .includes(filterField.toLowerCase());
    });

  const pageCount = Math.ceil(countriesToShow().length / 5);

  const endOffset = itemOffset + ItemsPerPage;
  const currentCountries = countriesToShow().slice(itemOffset, endOffset);

  const handlePageClick = (event, value) => {
    setPage(value);
    let newOffSet = ((value - 1) * ItemsPerPage) % countriesToShow().length;
    setItemOffset(newOffSet);
  };

  return (
    <>
      <CountryFilter
        filterField={filterField}
        setFilterField={setFilterField}
        setItemOffset={setItemOffset}
        setPage={setPage}
      />
      <CurrentCountries currentCountries={currentCountries} />
      <Pagination count={pageCount} page={page} onChange={handlePageClick} />
    </>
  );
};

export default CountryList;
