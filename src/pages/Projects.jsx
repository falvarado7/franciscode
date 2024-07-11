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
import Monarch from "../assets/Monarch.PNG"
import CarRental from "../assets/car-rental-project-pic.PNG"
import Movies from "../assets/WeLoveMovies.PNG"
import Restaurant from "../assets/Restaurant-reservation.PNG"
import Recipe from "../assets/Recipe-App.PNG"
import GrubDash from "../assets/GrubDash.PNG"
import Anoplex from '../assets/Anoplex.PNG'

const theme = createTheme({
  typography: {
    fontFamily: ['"Josefin Sans"', "sans-serif"].join(","),
  },
})

const styleHeader = {
  color: "white",
  textAlign: "center",
  marginTop: "2rem"
};

function Projects() {
  const styleCardContainer = {
    maxWidth: 345,
    height: "auto",
    margin: "3rem auto",
  }

  return (
    <Box component="div" id="portfolio" >
      <ThemeProvider theme={theme}>
        <Typography variant="h2" id="portfolio" style={styleHeader}>
          Projects
        </Typography>
      </ThemeProvider>
      <Grid container justifyContent="center">

      <Grid item xs={12} sm={6} md={4}>
          <Card style={styleCardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Anoplex"
                height="190"
                image={Anoplex}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Anoplex Software
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                This project involved converting a locally installed Windows program into a web-based module for Anoplex's website, 
                utilizing Laravel, React, and Inertia. The goal was to enable cross-platform compatibility and expand the product's 
                accessibility to Mac and Linux users. This project was pivotal in enhancing user experience and contributing to the 
                company's growth by broadening the customer base. Utilized Laravel, React, and Inertia to develop and maintain web 
                applications.
                </Typography>
                <br />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://www.anoplex.com/"
                target="blank"
              >
                Live Link
              </Button>
            </CardActions>
          </Card>
        </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
          <Card style={styleCardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Investment Trading Platform"
                height="190"
                image={Monarch}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Monarch
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Participated in a hackathon as part of a multidisciplinary team, consisting of 5 engineers 
                (2 backend, 3 frontend), a UI/UX designer, and a data analyst. Within one week, we developed 
                an investment trading platform that allows users to invest their money with no experience, 
                aided by our integrated AI. I was responsible for developing all pages post-signup/sign-in, 
                excluding the 'My Account' page. Additionally, I created interactive graphs using D3.js, 
                integrating real-time data provided by our data analyst through an API. This project was 
                built using React and Tailwind CSS.
                </Typography>
                <br />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/aabusaif8/Hackathon--Team2-V2"
                target="blank"
              >
                GitHub Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://hackathon-team2-v2-1.onrender.com/"
                target="blank"
              >
                Live Link
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card style={styleCardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="We Love Movies project"
                height="190"
                image={CarRental}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Car Rental
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Developed a fully frontend car rental website using React and CSS. 
                The site is mobile responsive and allows users to search and book various 
                vehicles for personal or business use. This project showcases my frontend 
                development skills, focusing solely on frontend technologies with no backend integration. 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/falvarado7/Car-Rental-Project"
                target="blank"
              >
                GitHub Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://car-rental-project-zeta.vercel.app/"
                target="blank"
              >
                Live Link
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
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

        <Grid item xs={12} sm={6} md={4} sx={{ mb: 6 }}>
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
                GrubDash is a fictional backend online food ordering and delivery platform. 
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

        <Grid item xs={12} sm={6} md={4} sx={{ mb: 6 }}>
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
                and free up occupied tables when guests leave. I built both Frontend and Backend implementing CRUD
                practices, RESTful API's, React hooks, CSS
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

        <Grid item xs={12} sm={6} md={4} sx={{ mb: 6 }}>
          <Card style={styleCardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Restaurant Resrvation app"
                height="190"
                image={Recipe}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Recipe Application
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                This application was built for users to show, create, delete, and edit their personal food recipes
                </Typography>
                <br />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/falvarado7/Recipe-App-Project"
                target="blank"
              >
                GitHub Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://recipe-app-project-5mmf.onrender.com/"
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