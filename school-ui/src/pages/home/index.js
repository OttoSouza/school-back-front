import React from "react";
import { withRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";

function Home(props) {
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={6}>
          <h4>Home</h4>
          <p>Home</p>
        </Grid>

        <Grid item xs={6}>
          <h4>Home</h4>
          <p>Home</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(Home);
