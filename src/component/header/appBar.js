import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import ButtonAppBarCollapse from "./menuBar";
import { NavLink } from "react-router-dom";
import HeaderStyles from "./styles";
import Dropdown from "../dropdown/index";
const AppBarCollapse = () => {
  const { root, buttonText,NavText, buttonBar } = HeaderStyles();
  return (
    <div className={root}>
      <ButtonAppBarCollapse>
        <NavLink className={NavText} to="/">
          <MenuItem>Getting Started</MenuItem>
        </NavLink>
        <Dropdown name={"My Work"}>
      <NavLink className={NavText} to="/MyWork"> 
      <MenuItem>My Work</MenuItem>
      </NavLink>
          <MenuItem className={NavText}>Anything</MenuItem>
        </Dropdown>
        <Dropdown name={"Explore"}>
          <MenuItem className={NavText} >XYZ</MenuItem>
          <MenuItem className={NavText}>Work</MenuItem>
        </Dropdown>
        <Dropdown name={"Upload"}>
          <MenuItem className={NavText} >Getting Started</MenuItem>
          <MenuItem className={NavText}>My Work</MenuItem>
        </Dropdown>{" "}
        <Dropdown name={"Community"}>
          <MenuItem className={NavText} >Getting Started</MenuItem>
          <MenuItem className={NavText}>My Work</MenuItem>
        </Dropdown>
        <Dropdown name={"Help"}>
          <MenuItem className={NavText} >Getting Started</MenuItem>
          <MenuItem className={NavText}>My Work</MenuItem>
        </Dropdown>
      </ButtonAppBarCollapse>
      <div className={buttonBar} id="appbar-collapse">
        <Button
          component={NavLink}
          className={buttonText}
          to="/"
          color="inherit"
        >
          Get Started
        </Button>
        <Dropdown name={"My Work"}>
      <NavLink className={NavText} to="/MyWork"> 
      <MenuItem>My Work</MenuItem>
      </NavLink>
          <MenuItem className={NavText}>Anything</MenuItem>
        </Dropdown>
        <Dropdown name={"Explore"}>
          <MenuItem className={NavText} >XYZ</MenuItem>
          <MenuItem className={NavText}>Work</MenuItem>
        </Dropdown>
        <Dropdown name={"Upload"}>
          <MenuItem className={NavText} >Getting Started</MenuItem>
          <MenuItem className={NavText}>My Work</MenuItem>
        </Dropdown>{" "}
        <Dropdown name={"Community"}>
          <MenuItem className={NavText} >Getting Started</MenuItem>
          <MenuItem className={NavText}>My Work</MenuItem>
        </Dropdown>
        <Dropdown name={"Help"}>
          <MenuItem className={NavText} >Getting Started</MenuItem>
          <MenuItem className={NavText}>My Work</MenuItem>
        </Dropdown>
        
      </div>
    </div>
  );
};
export default AppBarCollapse;
