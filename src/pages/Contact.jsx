import React from 'react'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Animated } from "react-animated-css";

const theme = createTheme({
  typography: {
    fontFamily: ['"Josefin Sans"', "sans-serif"].join(","),
  },
});

function Contact() {
  return (
    <div>
      <Box component="div" >
      <Grid container justifyContent="center">
        <Box component="div">
          <ThemeProvider theme={theme}>
            <Animated animationIn="bounceInRight" animationInDuration={2000}>
              <Typography variant="h2" align="center" color={"#fff"}>
                <strong>
                  <br />
                  Contact Me!
                </strong>
              </Typography>
            </Animated>
            <Animated
              animationIn="bounceInLeft"
              animationInDuration={3000}
              animationInDelay={800}
            >
              <Typography variant="h4" align="center" color={"#F48C06"}>
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
            </Animated>
            <Animated
              animationIn="bounceInUp"
              animationInDuration={2000}
              animationInDelay={3000}
            >
              <Typography align="center">
                <br />
                <Link
                  variant="h4"
                  href="mailto:francisco.alvarado217@yahoo.com?subject=Let's Work Together!"
                  color={"#fff"}
                ><strong>
                  Let's get started!</strong>
                </Link>
                <Typography variant="h4" align="center" color={"#FFFFFF"}>
                  Email: francisco.alvarado217@yahoo.com
                  <br />
                  Phone: 832.504.5844
                  <p></p>
                  <p></p>
                </Typography>
              </Typography>
            </Animated>
          </ThemeProvider>
        </Box>
      </Grid>
    </Box>
    </div>
  )
}

export default Contact
