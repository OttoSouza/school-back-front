import React from 'react'
import { Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TeamTable from '../table';

export default function TeamList() {
    return (
        <Grid
        container
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h2> List Classes </h2>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container justify="center" alignItems="center" spacing={6}>
                <Grid item xs={12}>
                  <TeamTable/>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
    )
}
