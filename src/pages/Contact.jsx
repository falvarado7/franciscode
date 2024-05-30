import React from 'react'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { ThemeProvider, createTheme, } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Animated } from "react-animated-css";
import FadeIn from 'react-fade-in';

const theme = createTheme({
  typography: {
    fontFamily: ['"Josefin Sans"', "sans-serif"].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function Contact() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Box component="div" sx={{ px: 2, py: 4, textAlign: 'center', height: "auto", mb: 3 }}>
        <Grid container justifyContent="center">
          <Box component="div" sx={{ width: '100%' }}>
            <ThemeProvider theme={theme}>
            <FadeIn delay={800} transitionDuration={600}>
                <Typography variant={isSmallScreen ? 'h3' : 'h2'} align="center" color={"#fff"} sx={{ width: '100%' }}>
                  <strong>
                    <br />
                    Contact Me!
                  </strong>
                </Typography>
              
                <Typography variant={isSmallScreen ? 'h4' : 'h4'} align="center" color={"#F48C06"}>
                  <strong>
                    <br />
                    I am currently looking for full time work<br />
                    in either an office setting in the Houston, TX area or in a remote setting.
                    <br />
                    <br />
                    Additionally, if you'd like to collaborate on a project,{" "}
                    <br />I would also love to hear from you!
                  </strong>
                </Typography>
              
                <Typography align="center">
                  <br />
                  <Link
                    variant={isSmallScreen ? 'h4' : 'h3'}
                    href="mailto:francisco.alvarado217@yahoo.com?subject=Let's Work Together!"
                    color={"#fff"}
                  >
                    <strong>Let's get started!</strong>
                  </Link>
                  <Typography variant={isSmallScreen ? 'h5' : 'h3'} align="center" color={"#F48C06"}>
                    Email: francisco.alvarado217@yahoo.com
                    <br />
                    Phone: 832.504.5844
                    <p></p>
                    <p></p>
                  </Typography>
                </Typography>
              </FadeIn>
            </ThemeProvider>
          </Box>
        </Grid>
      </Box>
    </div>
  )
}

export default Contact
