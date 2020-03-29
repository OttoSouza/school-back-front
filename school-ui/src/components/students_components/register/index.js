import React from "react";
import {
  Grid,
  TextField,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import useStudents from "../../../hooks/useStudent";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const INITIAL_STATE = {
  name: "",
  cpf: "",
  rg: "",
  phone: "",
  address: "",
  id_course: ""
};

export default function StudentsRegister() {
  const { handleSubmit, handleChange, values, courses } = useStudents(
    INITIAL_STATE
  );

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h2> Register Students </h2>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                  <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    name="name"
                    type="text"
                    value={values.name}
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

                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    label="CPF"
                    fullWidth
                    margin="normal"
                    name="cpf"
                    type="text"
                    value={values.cpf}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <TextField
                    label="Rg"
                    fullWidth
                    margin="normal"
                    name="rg"
                    type="text"
                    value={values.rg}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <TextField
                    label="Phone Number"
                    fullWidth
                    margin="normal"
                    name="phone"
                    type="text"
                    value={values.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField
                    label="Address"
                    fullWidth
                    margin="normal"
                    name="address"
                    type="text"
                    value={values.address}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button
                    variant="outlined"
                    fullWidth
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Create
                  </Button>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
    </>
  );
}
