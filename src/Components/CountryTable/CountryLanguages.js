import React from "react";
import TableCell from "@mui/material/TableCell";

const CountryLanguages = ({ languages }) => {
  return (
    <TableCell>
      <ul>
        {Object.values(languages).map((language) => {
          return <li key={language}>{language}</li>;
        })}
      </ul>
    </TableCell>
  );
};

export default CountryLanguages;
