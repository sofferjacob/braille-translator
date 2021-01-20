import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#000000",
      dark: "#000000",
      light: "#2c2c2c",
    },
    secondary: {
      main: "#62e2d5",
      light: "#99ffff",
      dark: "#1eb0a4",
    },
  },
});

export default theme;
