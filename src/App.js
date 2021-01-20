import React from "react";
import ReactDOM from "react-dom";

import { Router, Link } from "@reach/router";

import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Toolbar, Typography } from "@material-ui/core";
import theme from "./theme";
import Home from "./Home";
import Translation from "./Translation";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "#ffffff",
  },
  button: {
    color: "#ffffff",
  },
  icon: {
    height: 35,
    marginRight: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className={classes.root}>
          <AppBar color="primary">
            <Toolbar>
              <Link to="/" className={classes.title}>
                <Typography variant="h6">Traductor a Braille</Typography>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
        <Router>
          <Home path="/" />
          <Translation path="/translation/:text" />
        </Router>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
