import React from "react";
import { Button, MenuItem,Badge ,Grid} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import HeaderStyles from "./styles";
import Dropdown from "../dropdown/index";
import CustomButton from "../customButton";
import NotificationsIcon from '@material-ui/icons/Notifications';
const TopBar = () => {
  const { root, buttonText, TopbtnBar,iconBar } = HeaderStyles();



  return (
    <div className={root}>
      <div className={TopbtnBar} id="appbar-collapse">
          <Grid xs={12} className={iconBar}>
        <CustomButton title=" Sell Artwork"/>
        <div style={{padding:"0.3rem .2rem"}}>
        <Badge badgeContent={4} color="primary" >
        <NotificationsIcon style={{color:"black",fontSize:"33px"}}/>
       </Badge>
       </div>
        </Grid>
        <Dropdown img={true}  >
          <MenuItem className={buttonText} >ABS</MenuItem>
          <MenuItem className={buttonText}>Anything</MenuItem>
        </Dropdown>
      
        
      </div>
    </div>
  );
};
export default TopBar;
