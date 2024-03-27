import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import GitHub from '@mui/icons-material/GitHub'
import { IconButton } from '@mui/material'
import { LinkedIn } from '@mui/icons-material'

function Footer() {
  const icons = [
    {
      name: "GitHub",
      icon: <GitHub />,
      link: "https://github.com/falvarado7"
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/in/francisco-alvarado-dev/"
    }
  ]

  const styleFooter = {
    height: "8vh",
    backgroundColor: "rgba(0, 35, 66, 0.6",
    position: "fixed",
    bottom: "0",
    width: "100vw",
  };

  const styleIcons = {
    color: "#fff",
  }

  return (
    <div>
      <Box component="footer" style={styleFooter}>
        <Grid container justifyContent="center" alightItems="center">
          {icons.map((icon) => (
            <IconButton
              style={styleIcons}
              component="a"
              href={icon.link}
              key={icon.name}
              alignItems="center"
              target='blank'
            >
              {icon.icon}
            </IconButton>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default Footer