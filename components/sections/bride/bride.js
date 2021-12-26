import { Container, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/system';
import React from 'react';
import BrideBasicInfo from './brideBasicInfo';

const theme = createTheme;
const bride = () => {
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
                        <BrideBasicInfo />
                    </Paper>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default bride
