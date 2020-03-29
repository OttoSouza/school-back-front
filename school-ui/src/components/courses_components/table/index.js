import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useCouses from "../../../hooks/useCourses";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  edit: { color: "#fdd835" },
  delete: { color: "#d50000" }
});

const INITIAL_STATE = {
  courses: []
};

export default function CourseTable() {
  const { courses, loading } = useCouses(INITIAL_STATE);
  const classes = useStyles();

  const rows = courses.map(course => (
    <TableRow hover key={course.id}>
      <TableCell component="th" scope="row">
        {course.name}
      </TableCell>
      <TableCell align="right">{course.workload}</TableCell>
      <TableCell align="right">{course.amount}</TableCell>
      {course.courseStatus === "NOT_CONCLUED" ? (
        <TableCell align="right" scope="row">
          NOT_CONCLUED
        </TableCell>
      ) : (
        <TableCell align="right" scope="row">
          CONCLUED
        </TableCell>
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
    <>
      {loading === false ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">WorkLoad&nbsp;(Hours)</TableCell>
                <TableCell align="right">amount</TableCell>
                <TableCell align="right">Status</TableCell>
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
                <TableCell align="right">WorkLoad&nbsp;(Hours)</TableCell>
                <TableCell align="right">amount</TableCell>
                <TableCell align="right">Status</TableCell>
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
