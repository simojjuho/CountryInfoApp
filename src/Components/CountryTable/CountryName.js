import React from "react";
import TableCell from "@mui/material/TableCell";

const CountryName = ({ cca2, name }) => {
  return <TableCell>{name.common}</TableCell>;
};

export default CountryName;
