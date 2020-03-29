import React from "react";
import {
  Grid,
  TextField,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useProffessor from "../../../hooks/useProffessor";

const INITIAL_STATE = {
  name: "",
  graduate: "",
  id_course: ""
};

export default function ProffessorRegister() {
  const { handleChange, handleSubmit, values, courses } = useProffessor(
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
              <h2> Register Proffessor </h2>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
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
                <Grid item xs={12} sm={12} md={2} lg={2}>
                  <TextField
                    label="Graduate"
                    fullWidth
                    margin="normal"
                    name="graduate"
                    type="text"
                    value={values.graduate}
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
                    {courses.map(entity => (
                      <MenuItem key={entity.id} value={entity.id}>
                        {entity.name}
                      </MenuItem>
                    ))}
                  </Select>
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
