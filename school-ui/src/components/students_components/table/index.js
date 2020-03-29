import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useStudents from "../../../hooks/useStudent";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
const INITIAL_STATE = {
  students: []
};
const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  edit: { color: "#fdd835" },
  delete: { color: "#d50000" }
});

export default function StudentsTable() {
  const { students } = useStudents(INITIAL_STATE);
  const classes = useStyles();

  const rows = students.map(student => (
    <TableRow hover key={student.name}>
      <TableCell component="th" scope="row">
        {student.name}
      </TableCell>
      <TableCell align="right">{student.cpf}</TableCell>
      <TableCell align="right">{student.rg}</TableCell>
      <TableCell align="right">{student.phone}</TableCell>
      <TableCell align="right">{student.address}</TableCell>
      {student.statusStudent === "STUDYING" ? (
        <TableCell align="right">Studyinh</TableCell>
      ) : (
        <TableCell align="right">Locked</TableCell>
      )}

      <TableCell align="right" scope="row">
        <IconButton>
          <EditIcon className={classes.edit} />
        </IconButton>
        <IconButton>
          <DeleteIcon className={classes.delete} />
        </IconButton>
      </TableCell>
    </TableRow>
  ));

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Cpf</TableCell>
            <TableCell align="right">Rg</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
}
