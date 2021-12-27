import { Grid, Typography } from "@mui/material";
import React from "react";
import ImageTemplate from "../../shared/others/ImageTemplate";
import Title from "../../shared/others/title";
import Address from "../user/address";
import AddressDetails from "../user/addressDetails";
import Basic from "../user/basic";


function createAddressData(addType, division, district, upazila, union, postalCode, village) {
  return { addType, division, district, upazila, union, postalCode, village};
}
const rows = [
  createAddressData("বর্তমান ঠিকানা", "চট্টগ্রাম", "কুমিল্লা", "বরুড়া", "আড্ডা","3500","রাজাপাড়া"),
];

const BrideBasicInfo = () => {
  return (
    <>
      <Grid
        container
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Grid sm={9} md={9} xs={12} spacing={2}>
          <Grid sm={12} md={12}>
            <Basic type={"bride"} title={"মৌলিক তথ্য"} />
          </Grid>
          <Grid sm={12} md={12} sx={{ marginTop: 3 }}>
            <Address type={"bride"} title={"ঠিকানা"} />
          </Grid>
          <Grid sm={12} md={12} sx={{ marginTop: 3 }}>
            <AddressDetails title="ঠিকানা পুনঃমূল্যায়ন"/>
          </Grid>
        </Grid>
        <Grid sm={2} md={2.5} xs={12} sx={{ textAlign: "center" }}>
          <Grid sm={12} md={12} xs={12}>
            <Title>
              <Typography variant="h6">কনের ছবি</Typography>
            </Title>
            <ImageTemplate
              component="img"
              height="160"
              image="/brd.png"
              alt="bridePic"
            />
          </Grid>
          <Grid sm={12} md={12} xs={12} sx={{ marginTop: 3 }}>
            <Title>
              <Typography variant="h6">আঙুলের ছাপ (ডান হাত)</Typography>
            </Title>
            <ImageTemplate
              component="img"
              height="160"
              image="/fng.png"
              alt="brideFngRight"
            />
          </Grid>
          <Grid sm={12} md={12} xs={12} sx={{ marginTop: 3 }}>
            <Title>
              <Typography variant="h6">আঙুলের ছাপ (বাম হাত)</Typography>
            </Title>
            <ImageTemplate
              component="img"
              height="160"
              image="/fng.png"
              alt="brideFngLeft"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BrideBasicInfo;
