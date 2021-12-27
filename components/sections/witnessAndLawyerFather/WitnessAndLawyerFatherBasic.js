import { Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../../shared/others/Title";
import Address from "../user/address";
import WitnessForm from "./WitnessForm";
//

import TextField from "@mui/material/TextField";
// import WitnessForm from "../witness/witness";

const WitnessAndLawyerFatherBasic = (props) => {
  // উকিল বাবার তথ্য
  return (
    <>
      <Title>
        <Typography variant="h6">উকিল বাবার তথ্য</Typography>
      </Title>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            required
            id="Name"
            name="Name"
            label="নাম"
            fullWidth
            size="small"
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            required
            id="nid"
            name="nid"
            label="জাতীয় আইডি নম্বর"
            fullWidth
            size="small"
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            required
            id="dob"
            name="dob"
            label="জন্ম তারিখ"
            fullWidth
            size="small"
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid sm={6} md={5.5} xs={12} spacing={2} style={{ marginTop: "2%" }}>
            <Address title={"বর্তমান ঠিকানা"}></Address>
          </Grid>
          <Grid sm={6} md={5.5} xs={12} spacing={2} style={{ marginTop: "2%" }}>
            <Address title={"স্থায়ী ঠিকানা"}></Address>
          </Grid>
        </Grid>
      </Grid>

      <div style={{ marginTop: "4%" }}>
        <Title>
          <Typography variant="h6">সাক্ষীর তথ্য</Typography>
        </Title>
        <WitnessForm></WitnessForm>
      </div>
    </>
  );
};
export default WitnessAndLawyerFatherBasic;
