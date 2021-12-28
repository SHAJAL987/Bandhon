import React from "react";
import Title from "../../shared/others/Title";
import { TextField } from "@mui/material";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import Address from "../user/address";
import { Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

const BasicMarriageInformation = () => {
  return (
    <div>
      <Address title={"বিবাহ নিবন্ধনের স্থান"}></Address>
      <Title style={{ marginTop: "12%" }}>
        <Typography variant="h6">বিবাহ সম্পর্কে অন্যান্য তথ্য</Typography>
      </Title>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} md={3}>
          <Stack>
            <TextField
              id="marriageFiexedOn"
              label="বিয়ে ঠিক হয়েছে"
              fullWidth
              size="small"
              type="date"
              defaultValue="2021-12-27"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Stack>
            <TextField
              id="marriageDate"
              label="  বিয়ের তারিখ"
              fullWidth
              size="small"
              type="date"
              defaultValue="2021-12-27"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Stack>
            <TextField
              id="marriageRegistrationDate"
              label="বিবাহ নিবন্ধনের তারিখ"
              fullWidth
              size="small"
              type="date"
              defaultValue="2021-12-27"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <TextField
            required
            id="mohorAmmount"
            name="mohorAmount"
            label="মোহরের পরিমাণ"
            fullWidth
            size="small"
            autoComplete="given-name"
            variant="outlined"
            type={"number"}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <TextField
            required
            id="mohorMoazzol"
            name="mohorMoazzol"
            label="মোহর মোয়াজ্জল"
            fullWidth
            size="small"
            autoComplete="given-name"
            variant="outlined"
            type={"number"}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <TextField
            required
            id="mohorMoazzol"
            name="mohorMoazzol"
            label="মোহর মোয়াজ্জিল"
            fullWidth
            size="small"
            autoComplete="given-name"
            variant="outlined"
            type={"number"}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
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
                label="মোহর প্রদান করা হয়"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <TextField
            required
            id="mohorMoazzol"
            name="mohorMoazzol"
            label="
                  মোহর বিয়ের সময় পরিশোধ করে"
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

export default BasicMarriageInformation;
