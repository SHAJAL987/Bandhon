import { Container, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/system';
import React from 'react';
import GroomBasicInfo from './groomBasicInfo';

const theme = createTheme;
const groom = () => {
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
                        <GroomBasicInfo />
                    </Paper>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default groom
