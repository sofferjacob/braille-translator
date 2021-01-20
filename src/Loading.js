import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";

export default function Loading() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={10}>
        <CircularProgress color="secondary" />
      </Grid>
    </Grid>
  );
}
