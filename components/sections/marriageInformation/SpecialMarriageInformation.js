import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Title from "../../shared/others/Title";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const SpecialMarriageInformation = () => {
  return (
    <div>
      <Title style={{ marginTop: "12%" }}>
        <Typography variant="h6">বিবাহের বিশেষ তথ্য</Typography>
      </Title>

      <Grid container spacing={3}>
        <Grid item sm={6} md={6} sx={12}>
          <TextField
            required
            id="specialConditionBetweenTwoParties"
            name="specialConditionBetweenTwoParties"
            label="দুজনের মধ্যে বিশেষ অবস্থা"
            fullWidth
            size="small"
            autoComplete="given-name"
            variant="outlined"
            type={"number"}
          />
        </Grid>
        <Grid item sm={6} md={6} sx={12}>
          <TextField
            required
            id="specialConditionIfAny"
            name="specialConditionIfAny"
            label="বিশেষ শর্ত যদি থাকে"
            fullWidth
            size="small"
            autoComplete="given-name"
            variant="outlined"
            type={"number"}
          />
        </Grid>
        <Grid item sm={6} md={6} sx={12}>
          <FormControl component="fieldset">
            {/* <FormLabel component="legend">লিঙ্গ</FormLabel> */}
            <RadioGroup
              row
              aria-label="gender"
              name="controlled-radio-buttons-group"
              size="small"
              //   value={value}
              //   onChange={handleChange}
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="স্ত্রী বিচ্ছেদ করেছেন"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item sm={6} md={6} sx={12}>
          <TextField
            required
            id="wifesDevorceCondition"
            name="wifesDevorceCondition"
            label="স্ত্রীর ডিভোর্স করার শর্ত"
            fullWidth
            size="small"
            autoComplete="given-name"
            variant="outlined"
            type={"number"}
          />
        </Grid>
        <Grid item sm={6} md={6} sx={12}>
          <FormControl component="fieldset">
            {/* <FormLabel component="legend">লিঙ্গ</FormLabel> */}
            <RadioGroup
              row
              aria-label="gender"
              name="controlled-radio-buttons-group"
              size="small"
              //   value={value}
              //   onChange={handleChange}
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="স্বামীর বিচ্ছেদের অধিকার বাতিল"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item sm={6} md={6} sx={12}>
          <FormControl component="fieldset">
            {/* <FormLabel component="legend">লিঙ্গ</FormLabel> */}
            <RadioGroup
              row
              aria-label="gender"
              name="controlled-radio-buttons-group"
              size="small"
              //   value={value}
              //   onChange={handleChange}
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="
                মোহর ও খোরপোশের প্রমাণ পেশ করেছে"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item sm={12} md={12} sx={12}>
          <TextField
            required
            id="wifesDevorceCondition"
            name="wifesDevorceCondition"
            label="মোহর ও খোরপোশের শর্ত"
            fullWidth
            size="small"
            autoComplete="given-name"
            variant="outlined"
            type={"number"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SpecialMarriageInformation;
