import { Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../../shared/others/title";
import Basic from "../user/basic";

const BrideBasicInfo = () => {
  return (
    <>
    
      <Grid container style={{display:"flex", justifyContent: "space-around"}}>
        <Grid sm={9} md={9} sx={12} spacing={2}>
          <Basic type={"bride"} />
        </Grid>
        <Grid sm={2} md={2.5} sx={12} style={{textAlign:"center"}}>
          <Title>
            <Typography variant="h6" >
            কনের ছবি
            </Typography>
          </Title>
        </Grid>
      </Grid>
      
    </>
  );
};

export default BrideBasicInfo;
