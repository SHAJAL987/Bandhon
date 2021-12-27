import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Title from "../../shared/others/Title";
import { useState } from "react";
// import Title from "../../shared/others/title";

const basic = (props) => {
  const [religion, setReligion] = useState("");

  const handleChange = (event) => {
    setReligion(event.target.value);
  };

  return (
    <>
      <Title>
        <Typography variant="h6">মৌলিক তথ্য</Typography>
      </Title>

      <Grid container spacing={3} sx={{ marginTop: 1 }}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="nid"
            name="nid"
            label="জাতীয় আইডি নম্বর"
            fullWidth
            size="small"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack>
            <TextField
              id="date"
              label="জন্ম তারিখ"
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
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Name"
            name="Name"
            label="নাম"
            fullWidth
            size="small"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="mobile"
            name="mobile"
            label="মোবাইল নম্বর"
            fullWidth
            size="small"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="email"
            name="email"
            label="ইমেইল নম্বর"
            fullWidth
            size="small"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
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
                label="পুরুষ"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="মহিলা"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="fatherName"
            name="fatherName"
            label="পিতার নাম"
            fullWidth
            size="small"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="fathernid"
            name="fathernid"
            label="পিতার জাতীয় আইডি নম্বর"
            fullWidth
            size="small"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="mothername"
            name="mothername"
            label="মাতার নাম"
            fullWidth
            size="small"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="mothernid"
            name="mothernid"
            label="মাতার জাতীয় আইডি নম্বর"
            fullWidth
            size="small"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl fullWidth size="small">
            <InputLabel id="religion-select-label">ধর্ম</InputLabel>
            <Select
              labelId="religion-simple-select-label"
              id="religion"
              value={religion}
              label="religion"
              onChange={handleChange}
            >
              <MenuItem value={10} size="small">
                ইসলাম
              </MenuItem>
              <MenuItem value={20} size="small">
                হিন্দু
              </MenuItem>
              <MenuItem value={30} size="small">
                বৌদ্ধ
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {props.type === "user" && (
          <>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="pass"
                name="pass"
                label="পাসওয়ার্ড"
                type="password"
                fullWidth
                size="small"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="confirmpass"
                name="confirmpass"
                label="পাসওয়ার্ড নিশ্চিত করুন"
                type="password"
                fullWidth
                size="small"
                variant="outlined"
              />
            </Grid>
          </>
        )}

        {/* <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid> */}
      </Grid>
    </>
  );
};

export default basic;
