import React from 'react'
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Movies from "../assets/WeLoveMovies.PNG"
import Restaurant from "../assets/Restaurant-reservation.PNG"
import GrubDash from "../assets/GrubDash.PNG"

const theme = createTheme({
  typography: {
    fontFamily: ['"Josefin Sans"', "sans-serif"].join(","),
  },
})

const styleHeader = {
  color: "white",
  textAlign: "center",
};

function Projects() {
  const styleCardContainer = {
    maxWidth: 345,
    height: 410,
    margin: "5rem auto",
  }

  return (
    <Box component="div" id="portfolio" >
      <ThemeProvider theme={theme}>
        <Typography variant="h2" id="portfolio" style={styleHeader}>
          Projects
        </Typography>
      </ThemeProvider>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card style={styleCardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="We Love Movies project"
                height="190"
                image={Movies}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  We Love Movies
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                We Love Movies is a backend project, allowing users to search for movies, 
                leave reviews, and view theater information. It employs CRUD methods and router/controller 
                functions for efficient user interaction. 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/falvarado7/WeLoveMovies-Backend_Project"
                target="blank"
              >
                GitHub Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://welovemovies-frontend-ekzi.onrender.com"
                target="blank"
              >
                Live Link
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card style={styleCardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Restaurant Resrvation app"
                height="190"
                image={Restaurant}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Restaurant Reservation
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                This application was built for use by restaurant personnel to handle 
                reservations when a customer calls, seat reservations when they arrive at the restaurant, 
                and free up occupied tables when guests leave.
                </Typography>
                <br />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/falvarado7/Restaurant-Reservation-Project"
                target="blank"
              >
                GitHub Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://restaurant-reservation-project-1.onrender.com"
                target="blank"
              >
                Live Link
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card style={styleCardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="GrubDash"
                height="170"
                image={GrubDash}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  GrubDash
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                GrubDash is a fictional online food ordering and delivery platform. 
                It leverages RESTful APIs, Middleware functions, and Route-handlers for seamless 
                user experience. Custom validation functions ensure data integrity and user security.
                </Typography>
                <br />
                <br />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/falvarado7/GrubDash-BackEnd-Project"
                target="blank"
              >
                GitHub Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://grubdash-frontend-6dq9.onrender.com"
                target="blank"
              >
                Live Link
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Projects