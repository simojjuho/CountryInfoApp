import React, { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import CurrentCountries from "./CurrentCountries";
import { changeHeading } from "../reducers/headingReducer";

const CountryList = ({ searchField }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => dispatch(changeHeading("Country Info App")), []);

  const ItemsPerPage = 5;
  const countries = useSelector((state) => state.countries);
  const countriesToShow = () =>
    countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchField.toLowerCase());
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
      <CurrentCountries currentCountries={currentCountries} />
      <Pagination count={pageCount} page={page} onChange={handlePageClick} />
    </>
  );
};

export default CountryList;
