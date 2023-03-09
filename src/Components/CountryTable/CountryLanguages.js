import React from "react";
import TableCell from "@mui/material/TableCell";

const CountryLanguages = ({ languages }) => {
  const getLanguages = () => {
    if (!languages) return "No official languages!";
    else
      return Object.values(languages).map((language) => {
        return <li key={language}>{language}</li>;
      });
  };

  return (
    <TableCell>
      <ul>{getLanguages()}</ul>
    </TableCell>
  );
};

export default CountryLanguages;
