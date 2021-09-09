import React from "react";
import {
  Box,
  InputAdornment,TextField,
  Button,
  Grid,
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import SearchStyle from "./style";

export const CustomSearch = ({ value, onChange, onClick }) => {
  const {root,btn,icon}=SearchStyle();
  return (
    <Grid xs={12} className={root} >
       <Grid xs={9} md={10}>
         <TextField
        id="input-with-icon-textfield"
        value={value}
        onChange={onChange}
        placeholder="What Design are you looking for?"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className={icon} />
            </InputAdornment>
          ),
         disableUnderline: true
        }}
      />
      </Grid>
      <Grid xs={4} md={2} >
        <Button onClick={onClick} className={btn} >
          Search
        </Button>
        </Grid>
    </Grid>
  );
};
