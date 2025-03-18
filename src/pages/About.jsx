import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import Grid from "@mui/material/Grid"
import avatar from "../assets/IMG_5223.JPG"
import FadeIn from "react-fade-in"
import Button from "@mui/material/Button"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Josefin Sans"',
      'sans-serif'
    ].join(','),
  }
})


function About() {
  const styleAvatar = {
    width: "180px",
    height: "180px",
    marginBottom: "2rem",
  };

  const styleTitle = {
    color: "#fff",
    marginBottom: "1rem",
    fontSize: "3rem",
  };

  const styleSubtitle = {
    color: "#FFD700",
    marginBottom: "2rem",
    marginLeft: "3rem",
    marginRight: "3rem",
  };

  const styleContainer = {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "2rem",
    paddingBottom: "4rem",
    boxSizing: "border-box",
    backgroundColor: "transparent", 
  };

  return (
    <div id="about">
      <Box style={styleContainer} id="home">
      <Grid container justifyContent="center">
        <Avatar
          src={avatar}
          alt="image of Francisco"
          style={styleAvatar}
        />
      </Grid>
      <ThemeProvider theme={theme}>
      <FadeIn delay={800} transitionDuration={600}>
      
      <Typography variant="h3" style={styleTitle}>
        Francisco Alvarado
        
      </Typography>
      <Typography variant="h5" style={styleSubtitle}>
      I have a solid background in front-end and back-end development 
      and a commitment to delivering quality results. Let's do something truly remarkable together!
        </Typography>
        <Typography variant="h5" style={styleSubtitle}>
        Or we can talk about the gym or play some chess!
      </Typography>
      <Button variant="contained" href="https://docs.google.com/document/d/1shvK56pasHC8YoU7msknKxzQuYvwit3JJQkT3dzO4-o/edit?usp=sharing">
        My Resume
      </Button>
      
      </FadeIn>
      </ThemeProvider>
    </Box>
    </div>
  )
}

export default About
