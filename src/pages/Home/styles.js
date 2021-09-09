import { makeStyles } from "@material-ui/core";
import BackImage from "../../assests/images/image.png";
const HomeStyles = makeStyles((theme) => ({
  root: {
    height: "50vh",
    position: "relative",
    backgroundImage:`linear-gradient(rgba(48,79,71,.65) 100%,rgba(48,79,71,.65) 0),url(${BackImage})`,
  },
  backImg: {
    position: "absolute",
    width: "100%",
    backgroundColor: "rgba(255, 127, 71,.9)",
  },
  contentDiv:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    height: "50vh",
    marginLeft: "3rem",
  },
  text1:{
    color: "white",
  
    fontSize: "2.1rem",
 
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.9rem",
      },
  },
  text2:{
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
  top:"76%",
  [theme.breakpoints.down("xs")]: {
    top:"80%",
    },
},
  searchContent:{
    padding: "40px 45px 30px",
    maxWidth: "980px",
    margin: "0 auto",
 
    [theme.breakpoints.down("md")]: {
      maxWidth: "650px",
      },
    [theme.breakpoints.down("xs")]: {
    margin: "0 17px",
    padding: "27px",
    maxWidth: "450px",
   
    },
    
  }
 
}));

export default HomeStyles;
