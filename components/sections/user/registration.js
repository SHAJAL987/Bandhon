import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Address from "./address";
import Basic from "./basic";
import Review from "./review";

// ------------ Copyright Components -------------
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="error" href="https://erainfotechbd.com/">
        ERA-InfoTech Ltd
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// ------------ Stepper Steps -------------
const steps = ["মৌলিক তথ্য", "ঠিকানা", "পুনঃমূল্যায়ন"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Basic type={'user'}/>;
    case 1:
      return <Address type={'user'}/>;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

// ------------ Stepper Components Final view Steps -------------
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
// ------------ Stepper Components Main Steps -------------
const MainSteps = () => {
  return (
    <>
      {getStepContent(activeStep)}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {activeStep !== 0 && (
          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            Back
          </Button>
        )}

        <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
          {activeStep === steps.length - 1 ? "Place order" : "Next"}
        </Button>
      </Box>
    </>
  );
};


const theme = createTheme();

const registration = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main">
          <Paper
            // variant="outlined"
            sx={{ my: { xs: 3, md: 8 }, p: { xs: 2, md: 3 } }}
            elevation={3}
            square
            style={{ marginTop: "8%" }}
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
                {props.title}
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
          <Copyright />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default registration;
