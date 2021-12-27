import { Grid, Typography } from "@mui/material";
import React from "react";
import ImageTemplate from "../../shared/others/ImageTemplate";
import Title from "../../shared/others/title";
import Address from "../user/address";
import Basic from "../user/basic";

const BrideBasicInfo = () => {
  return (
    <>
      <Grid
        container
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Grid sm={9} md={9} xs={12} spacing={2}>
          <Basic type={"bride"} />
          <Address type={"bride"}/>
        </Grid>
        <Grid sm={2} md={2.5} xs={12} sx={{ textAlign: "center",}}>
          <Title>
            <Typography variant="h6">কনের ছবি</Typography>
          </Title>
          <ImageTemplate
            component="img"
            height="160"
            image="/brd.png"
            alt="Paella dish"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default BrideBasicInfo;
