import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Title from "../../shared/others/title";

const basic = (props) => {
  const [religion, setReligion] = React.useState("");

  const handleChange = (event) => {
    setReligion(event.target.value);
  };

  return (
    <>
      <Title>
        <Typography variant="h6">
          মৌলিক তথ্য
        </Typography>
      </Title>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="Name"
            name="Name"
            label="নাম"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="nid"
            name="nid"
            label="জাতীয় আইডি নম্বর"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="mobile"
            name="mobile"
            label="মোবাইল নম্বর"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="email"
            name="email"
            label="ইমেইল নম্বর"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="fatherName"
            name="fatherName"
            label="পিতার নাম"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="fathernid"
            name="fathernid"
            label="পিতার জাতীয় আইডি নম্বর"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="mothername"
            name="mothername"
            label="মায়ের নাম"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="mothernid"
            name="mothernid"
            label="মায়ের জাতীয় আইডি নম্বর"
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl component="fieldset">
            <FormLabel component="legend">লিঙ্গ</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="controlled-radio-buttons-group"
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
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <InputLabel id="religion-select-label">ধর্ম</InputLabel>
            <Select
              labelId="religion-simple-select-label"
              id="religion"
              value={religion}
              label="religion"
              onChange={handleChange}
            >
              <MenuItem value={10}>ইসলাম</MenuItem>
              <MenuItem value={20}>হিন্দু</MenuItem>
              <MenuItem value={30}>বৌদ্ধ</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {props.type === "user" && (
          <>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                id="pass"
                name="pass"
                label="পাসওয়ার্ড"
                type="password"
                fullWidth
                autoComplete="shipping country"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                id="confirmpass"
                name="confirmpass"
                label="পাসওয়ার্ড নিশ্চিত করুন"
                type="password"
                fullWidth
                autoComplete="shipping country"
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
