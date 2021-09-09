import React from "react";
import { Grid, Typography } from "@material-ui/core";
import HomeStyles from "./styles";
import { CustomSearch } from "../../component/Search";
import BreadCrumbs from "../../component/breadCrumbs";
import CustomButton from "../../component/customButton";

const Home = () => {
  const { root, contentDiv, searchDiv, searchContent,text2,text1,submitWork,famous,popularTxt ,designTxt} = HomeStyles();

  return (
    <Grid>
      <Grid className={root}>
       
        <Grid xs={8} className={contentDiv}>
        <BreadCrumbs/>
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
        <Grid xs={12} className={submitWork} >
          <div>
            <CustomButton title="SUBMIT YOUR WORK"/>
          </div>
        </Grid>
        <Grid xs={12} className={famous} >
          <div className={famous}>
           <Typography className={popularTxt}>  Popular:</Typography>
           <Typography className={designTxt} >  Web Design</Typography>
           <Typography className={designTxt} > Logo Design</Typography>
           <Typography className={designTxt} > Broucher</Typography>
           <Typography className={designTxt} > Label Design</Typography>

          </div>
        

        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
