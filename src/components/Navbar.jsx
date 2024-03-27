import React, { useState } from 'react'
import "../stylesheets/Navbar.css"
import { Link } from 'react-router-dom'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider'
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import PersonPinIcon from '@mui/icons-material/PersonPin'
import { ListItemIcon } from '@mui/material'
import avatar from "../assets/IMG_5223.JPG"
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"bradley hand"',
      'cursive'
    ].join(','),
  }
})

function Navbar() {
  const styleBox = {
    width: "250px",
    background: "#4da6ff",
    height: "100%",
  };

  const styleAvatar = {
    display: "block",
    margin: "0.5rem auto",
    width: "104px",
    height: "104px",
  }

  const navIcons = [
    {
      listIcon: <HomeIcon />,
      listText: "Home",
      listLink: "/"
    },
    {
      listIcon: <PersonPinIcon />,
      listText: "About Me",
      listLink: "/about"
    },
    {
      listIcon: <AppsIcon />,
      listText: "Projects",
      listLink: "/projects"
    },
    {
      listIcon: <ContactPageIcon />,
      listText: "Contact",
      listLink: "/contact"
    },
  ]

  const styleNavIcons = {
    color: "#00264d"
  }

  const [state, setState] = useState({right: false,})

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open })
  }

  const sideNav = (slider) => (
    <Box style={styleBox} component="div" onClick={toggleSlider(slider, false)}>
      <Avatar src={avatar} alt="image of Francisco Alvarado" style={styleAvatar} />
      <Divider />
      <List>
        {navIcons.map((listItems, index) => (
          <ListItemButton key={index} component={Link} to={listItems.listLink}>
            <ListItemIcon style={styleNavIcons}>
              {listItems.listIcon}
            </ListItemIcon>
            <ListItemText style={styleNavIcons} primary={listItems.listText}/>
          </ListItemButton>
        ))}
      </List>
    </Box>
  )

  return (
    <div className='navbar'>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#4da6ff", top: 0 }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <MenuIcon style={{ color: "#00264d" }} />
            </IconButton>
            <ThemeProvider theme={theme}>
              <Typography variant="h5">FRANCISCODE</Typography>
            </ThemeProvider>
            <Drawer
              open={state.right}
              anchor="right"
              onClose={toggleSlider("right", false)}
            >
              {sideNav("right")}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
      
      
    </div>
  )
}

export default Navbar