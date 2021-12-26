import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="error" href="https://erainfotechbd.com/">
        ERA-InfoTech Ltd
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

 const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" style={{ marginTop: "5%" }}>
        <CssBaseline />
        <Grid item xs={false} sm={8} md={4}/>
        <Grid item xs={false} sm={8} md={4} component={Paper} elevation={8} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <ThumbsUpDownIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            সাইন ইন
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="ই-মেইল/মোবাইল নং/এনআইডি"
                name="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="পাসওয়ার্ড"
                type="password"
                id="password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" />}
                label="আমাকে মনে রাখুন"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                সাইন ইন
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link color="secondary" href="#" variant="body2">
                  পাসওয়ার্ড ভুলে গেছেন?
                  </Link>
                </Grid>
                <Grid item>
                  <Link color="secondary" href="/user/" variant="body2">
                    {"একটি অ্যাকাউন্ট নেই? নিবন্ধন করুন"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={false} sm={8} md={4}/>
      </Grid>
     </ThemeProvider>
  );
}
