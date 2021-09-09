import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import ButtonAppBarCollapse from "./buttonbar";
import { NavLink } from "react-router-dom";
import HeaderStyles from "./styles";
import Dropdown from "../dropdown/index";
const AppBarCollapse = () => {
  const { root, buttonText, buttonBar } = HeaderStyles();
  return (
    <div className={root}>
      <ButtonAppBarCollapse>
        <NavLink className={buttonText} to="/">
          <MenuItem>Getting Started</MenuItem>
        </NavLink>
        <NavLink className={buttonText} to="/listing-pages">
          <MenuItem>My Work</MenuItem>
        </NavLink>
        <NavLink className={buttonText} to="/listing-pages">
          <MenuItem>Explore</MenuItem>
        </NavLink>
        <NavLink className={buttonText} to="/listing-pages">
          <MenuItem>Upload</MenuItem>
        </NavLink>
        <NavLink className={buttonText} to="/listing-pages">
          <MenuItem>Community</MenuItem>
        </NavLink>
        <NavLink className={buttonText} to="/listing-pages">
          <MenuItem>Help</MenuItem>
        </NavLink>
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
          <MenuItem className={buttonText} >ABS</MenuItem>
          <MenuItem className={buttonText}>Anything</MenuItem>
        </Dropdown>
        <Dropdown name={"Explore"}>
          <MenuItem className={buttonText} >XYZ</MenuItem>
          <MenuItem className={buttonText}>Work</MenuItem>
        </Dropdown>
        <Dropdown name={"Upload"}>
          <MenuItem className={buttonText} >Getting Started</MenuItem>
          <MenuItem className={buttonText}>My Work</MenuItem>
        </Dropdown>{" "}
        <Dropdown name={"Community"}>
          <MenuItem className={buttonText} >Getting Started</MenuItem>
          <MenuItem className={buttonText}>My Work</MenuItem>
        </Dropdown>
        <Dropdown name={"Help"}>
          <MenuItem className={buttonText} >Getting Started</MenuItem>
          <MenuItem className={buttonText}>My Work</MenuItem>
        </Dropdown>
        
      </div>
    </div>
  );
};
export default AppBarCollapse;
