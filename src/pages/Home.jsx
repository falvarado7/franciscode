import CssBaseline from "@mui/material/CssBaseline";
import Particles from "react-tsparticles";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <CssBaseline />
      <div>
        <Particles 
          height={"85vh"}
          options={{
            autoPlay: true,
            fullScreen: {
              enable: false,
              zIndex: 0,
            },
            fpsLimit: 60,
            particles: {
              links: {
                color: "#ffffff",
                distance: 175,
                enable: true,
                opacity: 0.5,
                width: 1.8,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1.5,
                straight: false,
              },
              number: {
                value: 50,
              },
              opacity:{
                value:{
                  min: 0.3,
                  max: 1
                }
              }
            },
          }}
        />
        <Hero />
      </div>     
    </div>
  )
}

export default Home