import {Box,Typography,Button} from '@mui/material';
import Lottie from 'react-lottie';
import contactUs from '../../Animation/contact-us.json';
import './contactUs.css';

export default function ContactUs(){
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: contactUs,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (<section id='contact_us' className='contact_us'>
        <Typography variant='h3' className='headline'>Contact Us</Typography>
        <hr style={{width:'100px',borderTop:'solid #2eaf6a 3px'}}/>
        <Box className='container'>
        <Box className='form-container' sx={{flexBasis:"48%",alignSelf:'center'}} component='form'>
           <input type="text" placeholder='Enter Your Name' required/>
            <input type="email" placeholder='Enter Your Email Address' required/>
            <input type="text" placeholder='Enter Your Subject' required/>
            <textarea rows="8" required placeholder='Message'></textarea>
            <Button variant='contained' sx={{display:'block',textAlign:'center',margin:'auto',background:'#185D66',":hover":{color:"#185D66",backgroundColor:"white"}}}>Submit</Button>
        </Box>
        <Box sx={{flexBasis:'48%',alignSelf:'center'}}>
         <Lottie 
	        options={defaultOptions}
          height={400}
          width={400}
        />
        </Box>
        </Box>
</section>);
}