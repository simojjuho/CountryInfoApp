import Link from "@mui/material/Link";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  Paper,
} from "@mui/material";
import CountryFlag from "./CountryTable/CountryFlag";
import CountryPopulation from "./CountryTable/CountryPopulation";
import CountryLanguages from "./CountryTable/CountryLanguages";
import CountryRegion from "./CountryTable/CountryRegion";
import CountryName from "./CountryTable/CountryName";

const CurrentCountries = ({ currentCountries }) => {
  const navigate = useNavigate();
  const handleRowClick = (cca2) => {
    navigate(`/countries/${cca2}`);
  };

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {currentCountries.map((country) => {
            return (
              <TableRow
                sx={{ maxHeight: 0.1 }}
                key={country.cca2}
                hover={true}
                onClick={() => handleRowClick(country.cca2)}
              >
                <CountryFlag flags={country.flags} />
                <CountryName cca2={country.cca2} name={country.name} />
                <CountryRegion region={country.region} />
                <CountryPopulation population={country.population} />
                <CountryLanguages languages={country.languages} />
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrentCountries;
