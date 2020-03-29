import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
import useProffessor from "../../../hooks/useProffessor";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  edit: { color: "#fdd835" },
  delete: { color: "#d50000" }
});

const INITIAL_STATE = {
  proffessors: []
};

export default function ProffessorTable() {
  const { proffessors, loading } = useProffessor(INITIAL_STATE);
  const classes = useStyles();

  const rows = proffessors.map(proffessor => (
    <TableRow hover key={proffessor.id}>
      <TableCell component="th" scope="row">
        {proffessor.name}
      </TableCell>
      <TableCell align="right">{proffessor.graduate}</TableCell>

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
    <>
      {loading === false ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Graduate</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{rows}</TableBody>
          </Table>
        </TableContainer>
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Graduate</TableCell>
                <TableCell align="right">Actions</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">Empty</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
