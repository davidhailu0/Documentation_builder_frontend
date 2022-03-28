import AppBar from '../AppBar';
import Carousal from '../Carousal/index.tsx';
import {Box,Typography,Button} from '@mui/material';
import { Waypoint } from 'react-waypoint';
import $ from 'jquery';
import './header.css';

export default function Header(){
  return (<>
  <AppBar/>
  <Carousal/>
  <Box className='introContainer'>
    <Waypoint onEnter={()=>{
            $('.appBar').removeClass('white');
            console.log($('#logo_container').src);
        }} onLeave={()=>{
             $('.appBar').addClass('white');
        }}
        />
      <Typography variant='h3' sx={{fontWeight:'bold',color:'white'}}>Generate your Template and Document Faster than Ever Before !!</Typography>
      <Typography variant='h2' margin='1rem 0rem' sx={{color:'white'}}>Try it out, It is free </Typography>
      <Button variant="contained" sx={{marginRight:'1rem',backgroundColor:'#2eaf6a',':hover':{backgroundColor:'#185C65'}}}>Get Started</Button>
      <Button variant="outlined" sx={{borderColor:'white',color:'white',':hover':{borderColor:'#2eaf6a'}}}>Read More</Button>
  </Box>
  </>);
}