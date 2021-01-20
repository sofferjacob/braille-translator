import React from "react";
import { Grid } from "@material-ui/core";
import Character from "./characters";

export default function Translation({ text }) {
  return (
    <Grid container spacing={2} style={{ marginTop: "5%" }}>
      {text.split("").map((c, i) => (
        <Grid item key={i}>
          <Character char={c} />
        </Grid>
      ))}
    </Grid>
  );
}
