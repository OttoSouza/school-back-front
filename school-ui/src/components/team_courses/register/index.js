import React from "react";
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  Button,
  ExpansionPanelDetails,
  TextField,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useTeam from "../../../hooks/useTeam";
const INITIAL_STATE = {
  name: "",
  turn: "",
  startDate: "",
  endDate: "",
  startHour: "",
  endHour: "",
  vacancies: "",
  id_course: ""
};

export default function TeamRegister() {
  const { handleSubmit, handleChange, values, allCourses } = useTeam(
    INITIAL_STATE
  );

  const selectTurn = ["Morning", "Afternoon", "Night"];

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
              <h2> Register Classes </h2>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container justify="center" alignItems="center" spacing={3}>
                <Grid item xs={12} sm={12} md={10} lg={10}>
                  <TextField
                    label="Name"
                    name="name"
                    fullWidth
                    type="text"
                    margin="normal"
                    value={values.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2}>
                  <InputLabel>Turns</InputLabel>
                  <Select
                    fullWidth
                    name="turn"
                    value={values.turn}
                    onChange={handleChange}
                  >
                    {selectTurn.map(turns => (
                      <MenuItem key={turns} value={turns}>
                        {turns}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <TextField
                    label="Start Date"
                    name="startDate"
                    fullWidth
                    format="MM/dd/yyyy"
                    type="date"
                    margin="normal"
                    value={values.startData}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <TextField
                    label="End Date"
                    name="endDate"
                    fullWidth
                    format="MM/dd/yyyy"
                    type="date"
                    margin="normal"
                    value={values.endDate}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <TextField
                    label="Start Hour"
                    name="startHour"
                    fullWidth
                    ormat="H:mm"
                    type="time"
                    margin="normal"
                    value={values.startHour}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <TextField
                    label="End Hour"
                    name="endHour"
                    format=""
                    fullWidth
                    type="time"
                    margin="normal"
                    value={values.endHour}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    label="Vacancies"
                    name="vacancies"
                    fullWidth
                    type="number"
                    margin="normal"
                    value={values.vacancies}
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
                    {allCourses.map(entity => (
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
