import { makeStyles } from "@material-ui/core";


const HeaderStyles = makeStyles((theme) => ({
  topbar: {
    flexGrow: 1,
    height: "20px",
    display:"flex",
    justifyContent:"space-between",
    borderBottom:".1rem solid #e8e8e8",
    [theme.breakpoints.down("xs")]: {
      height: "60px",
      flexDirection:"column-reverse",
      alignItems:"space-between",
      justifyContent:"space-between",
      marginTop:"3rem"
    },
  },
  roots: {
    flexGrow: 1,
    height: "80px",
    display:"flex",
    justifyContent:"space-between"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logoImg: {
    margin: "10px 20px",
    width: "160px",
    [theme.breakpoints.down("sm")]: {
      width: "120px",
    },
  },
  navigation: {
    backgroundColor: "white",
  },
  root: {
    boxShadow: "none",
    marginLeft: "4rem",
   
  [theme.breakpoints.down("md")]: {
    marginLeft: "2rem",
  },
  [theme.breakpoints.down("xs")]: {
    marginLeft: "0rem",
},
  },
  ArtworkText:{
   backgroundColor: "#50a933",
    color: "#fff",
    borderRadius: "32px",
    padding: ".4rem 1.2rem",
  },
  iconBar:{
    borderLeft:"1px solid #e8e8e8",
    borderRight:"1px solid #e8e8e8",
    display:"flex",
    justifyContent:"space-around",
    padding:"0rem .5rem"
        },
  TopbtnBar: {
    // [theme.breakpoints.down("xs")]: {
    //   display: "none",
    // },
 
    display:"flex",
    margin: "10px",
    paddingLeft: "16px",
    background: "transparent",
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    background: "transparent",
  },
  buttonText: {
    textDecoration: "none",
    color: "#827f7f",
    minWidth: "103px",
    [theme.breakpoints.down("sm")]: {
      fontSize:".9rem",
      padding: "6px 2px",
  },
  },
  NavText: {
    textDecoration: "none",
    color: "#827f7f",
    minWidth: "103px",
    
  },
  activeStyle: {
    textDecoration: "none",
    color: "#827f7f",
    minWidth: "103px",
    borderBottom:" 2px solid #50a933",
    padding:".5rem",
    [theme.breakpoints.down("xs")]: {
        padding:".5rem 0.2rem"
    },
  },
  toggleStyle: {
    textDecoration: "none",
    color: "#827f7f",
    minWidth: "103px",
    borderBottom:" 2px solid #fff",
    padding:".5rem",opacity:.5,
    [theme.breakpoints.down("xs")]: {
        padding:".5rem 0.2rem"
    },
  },
}));

export default HeaderStyles;
