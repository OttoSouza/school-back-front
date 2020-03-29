import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useTeam from "../../../hooks/useTeam";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
const INITIAL_STATE = {
  team: []
};
const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  edit: { color: "#fdd835" },
  delete: { color: "#d50000" }
});

export default function TeamTable() {
  const { allTeam } = useTeam(INITIAL_STATE);
  const classes = useStyles();

  const rows = allTeam.map(team => (
    <TableRow hover key={team.name}>
      <TableCell component="th" scope="row">
        {team.name}
      </TableCell>
      <TableCell align="right">{team.turn}</TableCell>
      <TableCell align="right">{team.startDate}</TableCell>
      <TableCell align="right">{team.endDate}</TableCell>
      <TableCell align="right">{team.startHour}</TableCell>
      <TableCell align="right">{team.endHour}</TableCell>
      <TableCell align="right">{team.vacancies}</TableCell>
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
            <TableCell align="right">Turn</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell align="right">Start Hour</TableCell>
            <TableCell align="right">End Hour</TableCell>
            <TableCell align="right">Vacancies</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
}
