import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import RoomIcon from "@mui/icons-material/Room";
import { Link } from "@mui/material";
import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { changeHeading } from "../reducers/headingReducer";

const CountryView = ({ countries }) => {
  const id = useParams().id;
  const country = countries.find((country) => {
    return country.cca2 === id;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeading(country.name.common.toUpperCase()));
  }, []);

  const isSearchBarNeeded = false;
  const navigate = useNavigate();

  const getLatitudeLongitude = () => {
    function latitude(lat) {
      if (lat >= 0) return `${lat} \u00B0N`;
      else return `${lat * -1} \u00B0S`;
    }
    function longitude(long) {
      if (long >= 0) return `${long} \u00B0E`;
      else return `${long * -1} \u00B0W`;
    }
    return `${latitude(country.latlng["0"])} and ${longitude(
      country.latlng["1"]
    )}`;
  };

  const isIndependent = () => {
    if (country.independent) return `has gained its independency`;
    else return `has not gained its independency`;
  };

  return (
    <Container>
      <Box>
        <Box
          component={"img"}
          src={country.flags.png}
          alt={country.flags.alt}
          sx={{
            width: 3 / 4,
            margin: "0 auto",
          }}
        />
        <Box component={"p"}>
          The country belongs to {country.region} region and {country.subregion}{" "}
          subregion. Located at the {getLatitudeLongitude()}, this country has
          population of ${country.population} and {isIndependent()}, according
          to CIA Factbook.
        </Box>
      </Box>
      <Box>
        <ArrowBackIos onClick={() => navigate("/")} />
        <Link href={`${country.maps.googleMaps}`}>
          <RoomIcon />
        </Link>
      </Box>
    </Container>
  );
};

export default CountryView;
