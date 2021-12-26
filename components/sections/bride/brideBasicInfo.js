import { Grid } from "@mui/material";
import React from "react";
import Basic from "../user/basic";

const BrideBasicInfo = () => {
  return (
    <>
      <Grid container>
        <Grid sm={8} sx={12} spacing={2}>
            <Basic type={"bride"} />
        </Grid>
        <Grid sm={4} sx={12}>
          
        </Grid>
      </Grid>
    </>
  );
};

export default BrideBasicInfo;
