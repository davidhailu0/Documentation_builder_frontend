import { Typography,Box } from "@mui/material";
import {Waypoint} from 'react-waypoint';
import $ from 'jquery';
import Lottie from 'react-lottie';
import WorksAnimation from '../../Animation/how-it-works.json';
import './templateWorks.css';

export default function HowItWorks(){
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: WorksAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (<section id='templateWorksId'><Box className='templateWorks'>
        <Typography variant='h3' className='headline'>How to Use it as Template Generator</Typography>
        <hr style={{width:'100px',borderTop:'solid #2eaf6a 3px'}}/>
        <Waypoint onEnter={()=>{
          $('.animate__animated').addClass('animate__slideInRight');
        }} />
        <Box sx={{display:{xs:'grid',md:'flex'}}}>
          <Box sx={{flexBasis:'48%'}}>
         <Lottie 
	        options={defaultOptions}
          height={400}
          width={400}
        />
        </Box>
        <Box sx={{flexBasis:"48%",display:'grid'}} className='research_text animate__animated animate__delay-1s'>
         <div className='title animate__animated'><span className="number">1</span><Typography sx={{display:'inline',fontWeight:'bold'}}>Enter the Sections you require</Typography></div>
         <Typography className="animate__animated">You will be given the freedom to add any sections that you want to be part of the documentation. There is no restriction on the number of fields you add.</Typography>
         <div className='title animate__animated animate__delay-1s'><span className="number">2</span><Typography sx={{display:'inline',fontWeight:'bold'}}>Write an Example (Optional in some cases)</Typography></div>
         <Typography className="animate__animated animate__delay-1s">You may also be required to write an example for the section. This is optional if that section is commonly used in documents</Typography>
         <div className='title animate__animated animate__delay-2s'><span className="number">3</span><Typography sx={{display:'inline',fontWeight:'bold'}}>Send your Template to our Verifier Team</Typography></div>
         <Typography className="animate__animated animate__delay-2s">After you have entered the section you require, you will have to send the template to our team, so it will be reviewed and uploaded to the website</Typography>
        </Box>
    </Box>
    </Box></section>);
}