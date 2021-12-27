import { Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import Title from "../../shared/others/Title";
import ImageTemplate from "../../shared/others/ImageTemplate";
// import Title from "../../shared/others/title";
import Address from "../user/address";
import Basic from "../user/basic";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function createAddressData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

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
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>ঠিকানার ধরন</TableCell>
                    <TableCell align="right">বিভাগ</TableCell>
                    <TableCell align="right">জেলা</TableCell>
                    <TableCell align="right">উপজেলা</TableCell>
                    <TableCell align="right">ইউনিয়ন</TableCell>
                    <TableCell align="right">পোস্ট অফিসের নাম্বার</TableCell>
                    <TableCell align="right">গ্রাম</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
