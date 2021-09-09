import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontSize: 18,
        fontWeight: 500,
        fontFamiy: "Work Sans', sans-serif",
        borderRadius: "5px",
        textTransform: "capitalize",
        padding: "0px",
        "&:hover": {
          backgroundColor: "#fff",
          color: "#ff7f47",
        },
        
      },
     
       
    
    },
    MuiRadio: {
      root: {
        color: "grey",
      },
      colorSecondary: {
        "&$checked": {
          color: "#ff7f47",
        },
      },
    },
    MuiTableSortLabel: {
      icon: {
        color: "#ff7f47",
        opacity: 2,
      },
    },
    MuiSvgIcon: {
      root: {
        
      },
    },
    MuiSlider: {
      root: {
        color: "#ff7f47",
        marginLeft: ".2rem",
        width: "97%",
      },
      mark: {
        width: "0%",
        height: "0%",
        left: "0%",
      },
      rail: {
        width: "100%",
        height: "7px",
        borderRadius: 4,
      },
      track: {
        height: "7px",
        borderRadius: 4,
      },
      thumb: {
        width: "17px",
        height: "17px",
        "&:focus, &:hover, &$active": {
          boxShadow:
            "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
        },
      },
    },
    PrivateSwitchBase:{
      root:{
      padding: "3px"},
  },
    //   MuiAppBar: {
    //  positionFixed: {
    //     position:" inherit"},  },
    MuiIconButton: {
      root: {
        color: "#ff7f47",
      },
    },
    MuiFormControl: {
      root: { 
width:"100%",
      
      },
    },
 
    MuiInputBase: {
      root: {
        color: " rgba(0, 0, 0, 0.87)",
        fontFamily: "Work Sans', sans-serif",
      },
      input:{
        "&:focus,&:hover":{
          backgroundColor:"white",
        },
        textTransform:"uppercase"

      }
    },
    MuiFilledInput: {
      root:{
        backgroundColor:"white",
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius:"5px",
      },
      underline:{
        "&:before, &:after,&:hover,&active": {
         borderBottom:"none"
        },
       
      },
      
      inputMarginDense: {
        padding: "0 14px",
        paddingTop: "8.5px",
        paddingBottom: "8.5px",
      },
    },
    MuiOutlinedInput: {
      inputMarginDense: {
        padding: "0 14px",
        paddingTop: "15.5px",
        paddingBottom: "15.5px",
      },
    },
  },

  typography: {
    fontFamiy: "Work Sans', sans-serif",
    fontWeightBold: 600,
  },
});

export default theme;
