import React from 'react'
import { ReactTyped } from 'react-typed'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import avatar from "../assets/IMG_5223.JPG"
import Grid from '@mui/material/Grid'
import { ThemeProvider, createTheme } from '@mui/material/styles'

  const theme = createTheme({
    typography: {
      fontFamily: [
        '"Josefin Sans"',
        'sans-serif'
      ].join(',')
    }
  })

function Hero() {
  const styleAvatar = {
    width: "180px",
    height: "180px",
    margin: "8px",
  }

  const styleTitle = {
    color: "#fff",
  }

  const styleSubtitle = {
    color: "#fff",
    marginBottom: "3rem"
   }

   const styleTypeContainer ={
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
 
  }

  return (
    <div>
      <Box style={styleTypeContainer}>
        <Grid container justifyContent="center">
          <Avatar style={styleAvatar} src={avatar} />
        </Grid>
        <ThemeProvider theme={theme}>
          <Typography variant='h4' style={styleTitle}><strong>
            <ReactTyped strings={["Francisco Alvarado"]} typeSpeed={40}/></strong>
          </Typography>
          <Typography variant='h5' style={styleSubtitle}><strong>
            <ReactTyped 
              strings={[
                "Full Stack Developer",
                "Problem Solver",
                "Programmer",
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
            </strong>
          </Typography>
        </ThemeProvider>
      </Box>
    </div>
  )
}

export default Hero