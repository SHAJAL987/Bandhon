import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Title from "../../shared/others/Title";

const basic = [
  "নাম",
  "জাতীয় আইডি নম্বর",
  "মোবাইল নম্বর",
  "ইমেইল নম্বর",
  "পিতার নাম",
  "পিতার জাতীয় আইডি নম্বর",
  "মায়ের নাম",
  "মায়ের জাতীয় আইডি নম্বর",
  "লিঙ্গ",
  "ধর্ম",
];
const addresses = [
  "ঠিকানার ধরন",
  "বিভাগ",
  "জেলা",
  "উপজেলা",
  "ইউনিয়ন",
  "পোস্ট অফিসের নাম্বার",
  "গ্রাম",
];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

const userInfo = [
  {
    name: "Noor Alam",
    nid: "6004589963",
    phone: "01730295758",
    email: "noor@gmail.com",
    fatherName: "Kala Mia",
    fatherNid: "6004589964",
    motherName: "Shoru Begum",
    motherNid: "6004589965",
    password: "1234",
    address: [
      {
        type: "PER",
        division: "Dhaka",
        district: "Cumilla",
        upazila: "Sharad South",
        union: "Adda",
        postalCode: 3500,
        village: "Dhulipara",
      },
      {
        type: "PRS",
        division: "Dhaka",
        district: "Dhaka",
        upazila: "Sharad",
        union: "Dhanmondi",
        postalCode: 3500,
        village: "Shukrabad",
      },
    ],
  },
];

const review = (props) => {
  return (
    <>
      <Title>
        <Typography variant="h6">{props.title}</Typography>
      </Title>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            মৌলিক তথ্য
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              {basic.map((item, index, array) => (
                <Typography gutterBottom key={index}>
                  {item}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={6}>
              {userInfo.map((item, index, array) => (
                <Typography gutterBottom key={index}></Typography>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            ঠিকানা
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              {addresses.map((item, index, array) => (
                <Typography gutterBottom key={index}>
                  {item}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={6}>
              {userInfo.map((item, index, array) => (
                <Typography gutterBottom key={index}></Typography>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default review;
