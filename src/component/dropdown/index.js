import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Menu,Button } from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const styles = (theme) => ({
  buttonCollapse: {
    color: "#827f7f",
    display:"contents",
    boxShadow: "none",
    fontSize:"1rem"
  },
});

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.buttonCollapse}>
          <Button
          onClick={this.handleMenu}
          color="inherit"
          endIcon={ <KeyboardArrowDownIcon
            direction="right"
            color= "#827f7f"
            onClick={this.handleMenu}
          />}
        >
           
      {this.props.name}
     { this.props.img &&
     <div  style={{backgroundColor:"#4e4545",width:"20px",height:"20px",borderRadius:"5px"}}>
      </div>
  }
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={this.handleClose}
        >
          {this.props.children}
        </Menu>
      </div>
    );
  }
}
export default withStyles(styles)(DropDown);
