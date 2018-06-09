/**
 * @author lars.hendahl@gmail.com,
 */

import { createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#FFF"
    }
  }
});
export default defaultTheme;
