import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontSize: 18,
        fontWeight: 500,
        fontFamiy: "'Roboto', sans-serif",
        borderRadius: "5px",
        textTransform: "capitalize",
        padding: "0px",
        "&:hover": {
          backgroundColor: "#fff",
          color: "#50a933",
        },
      },
      text: {
        padding: "6px 15px",
      },
      endIcon: {
        marginLeft: "0px",
      },
    },

    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
    MuiBadge: {
      colorPrimary: {
        backgroundColor: "#50a933",
      },
      anchorOriginTopRightRectangle: {
        top: "1px",
        right: "3px",
      },
    },
    MuiInputBase: {
      input: {
        "&:focus,&:hover": {
          backgroundColor: "white",
        },
        textTransform: "uppercase",
      },
    },
  },

  typography: {
    fontFamiy: "'Roboto', sans-serif",
    fontWeightBold: 600,
  },
});

export default theme;
