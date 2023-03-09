import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/* The code for this component is in large copied from https://mui.com/material-ui/react-app-bar/ and then fitted into my app. */

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({
  searchField,
  setSearchField,
  currentView,
}) {
  const handleFieldChange = (e) => {
    setSearchField(e.target.value);
  };

  const isAllCountriesView = currentView === "allCountries";

  const style = !isAllCountriesView
    ? {
        backgroundColor: "white",
        boxShadow: "0",
        color: "black",
      }
    : null;
  const heading = useSelector((state) => state.heading);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={style}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: isAllCountriesView ? "none" : "block",
                sm: "block",
              },
            }}
          >
            {heading}
          </Typography>
          <Button color="inherit" component={Link} to="/">
            countries
          </Button>
          <Button color="inherit" component={Link} to="/info">
            info
          </Button>
          {isAllCountriesView && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchField}
                onChange={handleFieldChange}
              />
            </Search>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
