import WitnessAndLawyerFatherBasic from "./WitnessAndLawyerFatherBasic";
import { Container, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/system";
const WitnessAndLawyerFather = (props) => {
  const theme = createTheme;
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Paper
            // variant="outlined"
            sx={{ my: { xs: 3, md: 8 }, p: { xs: 2, md: 3 } }}
            elevation={3}
            square
            style={{ marginTop: "8%" }}
          >
            <WitnessAndLawyerFatherBasic></WitnessAndLawyerFatherBasic>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default WitnessAndLawyerFather;
