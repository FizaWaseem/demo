import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";
import {AppBar,Button,Grid} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";

import AppBarCollapse from "./appBar";
import Logo from "../../assests/images/logo.png";
import HeaderStyles from "./styles";
import TopBar from "./TopBar";

function ButtonAppBar() {
  const { topbar,roots, navigation, logoImg ,activeStyle,toggleStyle} = HeaderStyles();
  const [ActiveIndex, setActiveIndex] = React.useState(0);

  const toggleButton=(i)=>{
 setActiveIndex(i);
     console.log(i,"some")
    }
const btn=[
  {
    id:1,
    name:"Designhill"
  },
  {
    id:2,
    name:"PrintShop"
  }
]
  return (
    <AppBar  position="static" className={navigation}>
      <Toolbar className={topbar}>
        <Grid style={{display:"flex"}}>
        {btn.map((u, i) => {
              return (
                
                <Grid
                  onClick={()=>toggleButton(i)}
                  key={u.id} className={i === ActiveIndex ? activeStyle : toggleStyle}
                   >
                   <Typography varient="h3" component="h6"> 
                    {u.name}
                  </Typography> 
                    </Grid>
              )
            })}
            </Grid>
        <TopBar />
      </Toolbar>
      <Toolbar className={roots}>
        <img className={logoImg} src={Logo} alt="travel Logo" />
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  );
}

export default ButtonAppBar;
