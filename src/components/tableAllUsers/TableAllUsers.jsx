import React from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TableUserAll = ({ dataUsers }) => {
  return (
    <TableContainer>
      <TableHead>
        <TableRow>
          <TableCell>username</TableCell>
          <TableCell align="right">status</TableCell>
          <TableCell align="right">phoneNumber</TableCell>
          <TableCell align="right">date</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {dataUsers.map((publication) => (
          <TableRow key={publication.username}>
            <TableCell>{publication.username}</TableCell>
            <TableCell>{publication.status}</TableCell>
            <TableCell>{publication.phoneNumber}</TableCell>
            <TableCell>{publication.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default TableUserAll;
