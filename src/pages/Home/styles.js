import { makeStyles } from "@material-ui/core";
import BackImage from "../../assests/images/image.png";
const HomeStyles = makeStyles((theme) => ({
  root: {
    height: "50vh",
    position: "relative",
    backgroundImage: `linear-gradient(rgba(48,79,71,.65) 100%,rgba(48,79,71,.65) 0),url(${BackImage})`,
  },
  backImg: {
    position: "absolute",
    width: "100%",
    backgroundColor: "rgba(255, 127, 71,.9)",
  },
  contentDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    height: "50vh",
    marginLeft: "3rem",
  },
  text1: {
    color: "white",
    fontSize: "2.1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.9rem",
    },
  },
  text2: {
    color: "white",
    fontWeight: 600,
    fontSize: "2.3rem",
    textTransform: "uppercase",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  searchDiv: {
    position: "absolute",
    width: "100%",
    top: "82%",
    [theme.breakpoints.down("xs")]: {
      top: "80%",
    },
    [theme.breakpoints.down("md")]: {
      top: "90%",
    },
     [theme.breakpoints.down("sm")]: {
      top: "86%",
    },
  },
  searchContent: {
    padding: "40px 45px 30px",
    maxWidth: "980px",
    margin: "0 auto",

    [theme.breakpoints.down("md")]: {
      maxWidth: "780px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "650px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 17px",
      padding: "27px",
      maxWidth: "450px",
    },
  },
  submitWork: {
    marginTop: "3.8rem",
    display: "flex",
    justifyContent: "center",
  },
  famous:{
    marginTop: ".3rem",
    display: "flex",
    alignItems:"center",
    justifyContent: "center",
  },
  popularTxt: {
    color:"black",
    fontSize:"18px",
    padding:".5rem",
   [theme.breakpoints.down("xs")]: {
    fontSize:"14px",
    padding:".3rem",
  },},
 designTxt: {color:"#50a933",
 fontSize:"18px",
 padding:".5rem",
 [theme.breakpoints.down("xs")]: {
  fontSize:"14px",
  padding:".3rem",
},}

}));

export default HomeStyles;
