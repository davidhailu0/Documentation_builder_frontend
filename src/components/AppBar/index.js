import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import {Link} from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import logo from '../../images/green_logo.PNG';
import $ from 'jquery';
import './AppBar.css';

const pages = ['How to Generate Document','How to Generate Template','Contact_Us'];


const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(0,0,0,0)',
    },
    secondary:{
      main:'#000'
    },
    success:{
      main:'#808080'
    }
  },
});

const ResponsiveAppBar = () => {
    const[drawer,setDrawer] = React.useState(false);
    const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{display:'grid',justifyContent:'space-around',rowGap:"1rem"}}>
        {pages.map((text, index) => (
          <Button key={index} color='secondary' onClick={()=>{
            $('html, body').animate({
          scrollTop: $(`section[id="${text}"]`).offset().top - 50
     },1000);
      $(".animate__animated").removeClass("animate__animated");
          }}>
            {text.replace('_',' ')}
          </Button>
        ))}
      </Box>
    </Box>
  );


  return (
    <ThemeProvider theme={theme}>
    <AppBar position="fixed" elevation={0} sx={{zIndex:2}} className="appBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={'/'} onClick={()=>{
            $('html, body').animate({
          scrollTop: $(`section[id="home"]`).offset().top - 50
     },1000);
          }}>
            <img src={logo} id='logo_container' alt="Website-logo" height='100'/>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>{
                  $('html, body').animate({
          scrollTop: $(`section[id="${page}"]`).offset().top - 50
     },1000);
      $(".animate__animated").removeClass("animate__animated");
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
                className='appBarButton'
              >
                {page.replace('_',' ')}
              </Button>
            ))}
          </Box>
          <Box sx={{display:{xs:'none',md:'flex'}}}>
            <Link to='/signIn' className='loginButton'>Login</Link>
          </Box>
          <Box sx={{flexGrow:1,display:{xs:'flex',md:'none'}}}></Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
                      <Drawer
            anchor='right'
            open={drawer}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
