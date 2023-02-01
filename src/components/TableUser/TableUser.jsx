import React from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TableUser = ({ dataUsers }) => {
  return (
    <TableContainer>
      <TableHead>
        <TableRow>
          <TableCell>fullName</TableCell>
          <TableCell align="right">passportInn</TableCell>
          <TableCell align="right">deviceImei</TableCell>
          <TableCell align="right">registrationDate</TableCell>
          <TableCell align="right">salesmanLogin</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {dataUsers.map((publication) => (
          <TableRow key={publication.id}>
            <TableCell>{publication.fullName}</TableCell>
            <TableCell>{publication.passportInn}</TableCell>
            <TableCell>{publication.deviceImei}</TableCell>
            <TableCell>{publication.registrationDate}</TableCell>
            <TableCell>{publication.salesmanLogin}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default TableUser;
