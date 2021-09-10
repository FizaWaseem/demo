import React from 'react'
import { Button} from "@material-ui/core";
const CustomButton = ({component,onClick,to,title}) => {
    return (
        <Button
          component={component}
          style={{
            backgroundColor: "#50a933",
             color: "#fff",
             borderRadius: "32px",
             padding: ".4rem 1.5rem",
           }}
          to={to}
          onClick={onClick}
          color="inherit"
          size={"medium"}
        >
     {title}
        </Button>
    )
}

export default CustomButton
