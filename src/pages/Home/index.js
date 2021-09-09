import React from "react";
import { Grid, Typography } from "@material-ui/core";
import HomeStyles from "./styles";
import { CustomSearch } from "../../component/Search";

const Home = () => {
  const { root, contentDiv, searchDiv, searchContent,text2,text1 } = HomeStyles();

  return (
    <Grid>
      <Grid className={root}>
        <Grid xs={8} className={contentDiv}>
          <Typography variant="h4" component="h6" className={text1}>
            Discover
          </Typography>
          <Typography
            variant="h4"
            component="h1"
           className={text2}
          >
            Graphic design Ideas & Inspiration
          </Typography>
        </Grid>
        <Grid className={searchDiv}>
          <Grid xs={12} className={searchContent}>
            <CustomSearch />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
