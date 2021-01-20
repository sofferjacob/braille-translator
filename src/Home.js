import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { navigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: "5%",
    marginLeft: "15%",
    marginRight: "15%",
    height: "60%",
    width: "70%",
  },
  btn: {
    marginRight: "15%",
    marginLeft: "15%",
    width: "70%",
    marginTop: theme.spacing(2),
  },
}));

export default function Home() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [input, setInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const chars = input.replace(/[\s\W]+/g, "").toLowerCase();
        navigate(`/translation/${chars}`);
      }}
    >
      <TextField
        className={classes.textField}
        label="Ingresa texto a traducir"
        multiline
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        type="submit"
        color="primary"
        fullWidth
        variant="contained"
        className={classes.btn}
      >
        Traducir
      </Button>
    </form>
  );
}
