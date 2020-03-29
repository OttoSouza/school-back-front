import React from "react";
import {
  Grid,
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import useEnroll from "../../../hooks/useEnroll";

const manager = JSON.parse(localStorage.getItem("manager"));

const INITIAL_STATE = {
  dataRegistration: "",
  registrationFee: "",
  id_manager: manager.id,
  id_student: "",
  id_course: ""
};
export default function EnrollRegister() {
  const { values, courses, students, createEnroll, handleChange } = useEnroll(
    INITIAL_STATE
  );

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12}>
        <h2> Enroll </h2>

        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <TextField
              label="Registration Date"
              fullWidth
              margin="normal"
              format="MM/dd/yyyy"
              name="dataRegistration"
              type="date"
              value={values.dataRegistration}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              label="Registration Fee"
              fullWidth
              margin="normal"
              name="registrationFee"
              type="number"
              value={values.registrationFee}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <InputLabel>Courses</InputLabel>
            <Select
              fullWidth
              name="id_course"
              value={values.id_course}
              onChange={handleChange}
            >
              {courses.map(course => (
                <MenuItem key={course.id} value={course.id}>
                  {course.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <InputLabel>Students</InputLabel>
            <Select
              fullWidth
              name="id_student"
              value={values.id_student}
              onChange={handleChange}
            >
              {students.map(student => (
                <MenuItem key={student.id} value={student.id}>
                  {student.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button
              variant="outlined"
              fullWidth
              color="primary"
              onClick={createEnroll}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
