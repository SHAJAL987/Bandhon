import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Title from "../../shared/others/title";

const address = (props) => {
  const [addressType, setAddressType] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [union, setUnion] = useState("");

  const handleAddTypeChange = (event) => {
    setAddressType(event.target.value);
  };

  const handleDivisionChange = (event) => {
    setDivision(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleUpazilaChange = (event) => {
    setUpazila(event.target.value);
  };

  const handleUnionChange = (event) => {
    setUnion(event.target.value);
  };

  return (
    <>
      {props.type === "user" && (
        <>
          <Title>
            <Typography variant="h6">ঠিকানা</Typography>
          </Title>
        </>
      )}
      <Grid container spacing={3} sx={{marginTop:1}}>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth size="small">
            <InputLabel id="addressType-select-label">ঠিকানার ধরন</InputLabel>
            <Select
              labelId="addressTypeLabel"
              id="addressTypeId"
              value={addressType}
              label="address"
              onChange={handleAddTypeChange}
            >
              <MenuItem value={10}>বর্তমান ঠিকানা</MenuItem>
              <MenuItem value={20}>স্থায়ী ঠিকানা</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth size="small">
            <InputLabel id="division">বিভাগ</InputLabel>
            <Select
              labelId="divisionLabel"
              id="divisionId"
              value={division}
              label="division"
              onChange={handleDivisionChange}
            >
              <MenuItem value={10}>ঢাকা</MenuItem>
              <MenuItem value={20}>চট্টগ্রাম</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth size="small">
            <InputLabel id="district">জেলা</InputLabel>
            <Select
              labelId="districtLabel"
              id="districtId"
              value={district}
              label="district"
              onChange={handleDistrictChange}
            >
              <MenuItem value={10}>কুমিল্লা</MenuItem>
              <MenuItem value={20}>নোয়াখালী</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth size="small">
            <InputLabel id="upazila">উপজেলা</InputLabel>
            <Select
              labelId="upazilaLabel"
              id="upazilaId"
              value={upazila}
              label="upazila"
              onChange={handleUpazilaChange}
            >
              <MenuItem value={10}>বরুড়া</MenuItem>
              <MenuItem value={20}>ব্রাহ্মণপাড়া</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth size="small">
            <InputLabel id="union">ইউনিয়ন</InputLabel>
            <Select
              labelId="unionLabel"
              id="unionId"
              value={union}
              label="union"
              onChange={handleUnionChange}
            >
              <MenuItem value={10}>আড্ডা</MenuItem>
              <MenuItem value={20}>আদ্রা</MenuItem>
              <MenuItem value={30}>খোশবাশ উত্তর</MenuItem>
              <MenuItem value={40}>খোশবাস দক্ষিণ</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="postalCode"
            name="postalcode"
            type="number"
            label="পোস্ট অফিসের নাম্বার"
            fullWidth
            size="small"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="village"
            name="village"
            type="text"
            label="গ্রাম"
            fullWidth
            size="small"
            variant="outlined"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
    </>
  );
};

export default address;
