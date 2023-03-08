import React from "react";
import Pagination from "@mui/material/Pagination";
import { useSelector } from "react-redux";
import { useState } from "react";
import CurrentCountries from "./CurrentCountries";
import CountryFilter from "./CountryFilter";

const CountryList = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [filterField, setFilterField] = useState("");

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

  console.log(
    "currentCountries: ",
    currentCountries,
    "endOffSet: ",
    endOffset,
    "itemOffset:",
    itemOffset
  );
  const handlePageClick = (event, value) => {
    let newOffSet = ((value - 1) * ItemsPerPage) % countriesToShow().length;
    console.log(
      "value: ",
      value - 1,
      "* 5 % countriesToShow().length",
      countriesToShow().length
    );
    console.log(((value - 1) * ItemsPerPage) % countriesToShow().length);
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
