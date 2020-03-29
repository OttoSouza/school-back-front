import React from "react";
import {
  Grid,
  TextField,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import useCouses from "../../../hooks/useCourses";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const INITIAL_STATE = {
  name: "",
  workload: "",
  amount: ""
};

export default function CoursesRegister() {
  const { handleChange, handleSubmit, values, erros, submitting } = useCouses(
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
              <h2> Register Courses </h2>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item xs={12} sm={12} md={8} lg={8 }>
                  <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {erros.name && <p>{erros.name}</p>}
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2}>
                  <TextField
                    label="Workload"
                    fullWidth
                    margin="normal"
                    name="workload"
                    type="number"
                    value={values.workload}
                    onChange={handleChange}
                  />
                  {erros.workload && <p>{erros.workload}</p>}
                </Grid>

                <Grid item xs={12} sm={12} md={2} lg={2}>
                  <TextField
                    label="Amount"
                    fullWidth
                    margin="normal"
                    name="amount"
                    type="number"
                    value={values.amount}
                    onChange={handleChange}
                  />
                  {erros.amount && <p>{erros.amount}</p>}
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button
                    variant="outlined"
                    fullWidth
                    color="primary"
                    onClick={handleSubmit}
                    disabled={submitting}
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
