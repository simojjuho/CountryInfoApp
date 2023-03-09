import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const TableHeadings = () => {
  return (
    <TableRow>
      <TableCell>Flag</TableCell>
      <TableCell>Country</TableCell>
      <TableCell>Area</TableCell>
      <TableCell>Population</TableCell>
      <TableCell>Languages</TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
};

export default TableHeadings;
