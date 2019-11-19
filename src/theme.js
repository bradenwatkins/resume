import { createMuiTheme } from "@material-ui/core/styles";

const light = "light";
const dark = "dark";

// Documentation on custom themes can be found at: https://material-ui.com/customization/theming/
const lightTheme = createMuiTheme({
  palette: {
    type: light
  }
});

const darkTheme = createMuiTheme({
  palette: {
    type: dark
  }
});

export { lightTheme, darkTheme };