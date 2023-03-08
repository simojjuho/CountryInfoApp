import React from "react";
import TableCell from "@mui/material/TableCell";
import Box from "@mui/material/Box";

const CountryFlag = ({ flags }) => {
  return (
    <TableCell>
      <Box
        component="img"
        sx={{ maxHeight: { xs: "30px", md: "60px" } }}
        src={flags.png}
        alt={flags.alt}
      ></Box>
    </TableCell>
  );
};

export default CountryFlag;
