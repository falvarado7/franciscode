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
    margin: "8px"
  };

  const styleTitle ={
    color: "#fff"
  }

 const styleSubtitle = {
  color: "white",
  marginBottom: "2rem",
  marginLeft: "3rem",
  marginRight: "3rem"
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
      <Box style={styleTypeContainer} id="home">
      <Grid container justifyContent="center">
        <Avatar
          src={avatar}
          alt="image of Francisco"
          style={styleAvatar}
        />
      </Grid>
      <ThemeProvider theme={theme}>
      <FadeIn delay={800} transitionDuration={600}>
      
      <Typography variant="h4" style={styleTitle}>
        Francisco Alvarado
        
      </Typography>
      <Typography variant="h5" style={styleSubtitle}>
      As a dedicated coding enthusiast with a strong passion for innovation and problem-solving, 
      I'm thrilled at the opportunity to collaborate with you on your upcoming project. 
      With a solid background in front-end and back-end develoment and a commitment to delivering high-quality results, 
      I'm eager to contribute my skills and expertise to help bring your ideas to life. 
      Let's work together to create something truly remarkable!
        </Typography>
        <Typography variant="h5" style={styleSubtitle}>
        Or we can explore intriguing topics like space exploration and the mysteries of the universe
      </Typography>
      <Button variant="contained" href="https://docs.google.com/document/d/1v2AyIx2MDkd1SizPfZBzZb_Typ-jVi1d5KiEe4Znzjg/edit?usp=sharing">My Resume</Button>
      
      </FadeIn>
      </ThemeProvider>
    </Box>
    </div>
  )
}

export default About
