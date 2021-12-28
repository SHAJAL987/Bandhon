import React from "react";

import {
  Container,
  Paper,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/system";

import Typography from "@mui/material/Typography";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import BasicMarriageInformation from "./BasicMarriageInformation";
import SpecialMarriageInformation from "./SpecialMarriageInformation";

// ------------ Stepper Steps -------------
const steps = ["বিবাহের মৌলিক তথ্য", "বিবাহের বিশেষ তথ্য"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicMarriageInformation />;
    case 1:
      return <SpecialMarriageInformation type={"user"} title={"ঠিকানা"} />;

    default:
      throw new Error("Unknown step");
  }
}
const FinalStep = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order number is #2001539. We have emailed your order confirmation,
        and will send you an update when your order has shipped.
      </Typography>
    </>
  );
};

const MarriageInformation = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Paper
            // variant="outlined"
            sx={{ my: { xs: 3, md: 8 }, p: { xs: 2, md: 3 } }}
            elevation={3}
            square
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{ textAlign: "center", m: 1, bgcolor: "secondary.main" }}
              >
                <ThumbsUpDownIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                বিয়ের তথ্য
              </Typography>
            </Box>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <FinalStep />
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default MarriageInformation;
