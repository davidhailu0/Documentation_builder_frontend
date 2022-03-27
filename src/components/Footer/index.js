import {Component} from 'react';
import Typography from  '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component{
    render(){
        return(<Box className='footer' sx={{display:{xs:'grid',md:'flex'},height:{xs:'500px',md:'300px'}}} justifyContent={'space-around'} alignItems={'center'} rowGap={'2rem'}>
            <div>
                <Typography color={'white'}>
               Documentation Builder
                </Typography>
                <p>&copy; 2022 All Rights Reserved Addis Ababa, Ethiopia</p>
            </div>
            <div>
                <Typography>Documentation Builder Tools</Typography>
                <ul className="footer_list">
                    <li><Link to='/document-generator'><Typography fontWeight={250}> Document Builder</Typography></Link></li>
                    <li><Link to='/template-generator'><Typography fontWeight={250}> Template Builder</Typography></Link></li>
                    <li><Link to='/how-to-develop-template'><Typography fontWeight={250}>How to Develop Template</Typography></Link></li>
                    <li><Link to='/how-to-write-document'><Typography fontWeight={250}>How to write Document</Typography></Link></li>
                </ul>
            </div>
             <div>
                <Typography>About</Typography>
                <ul className="footer_list">
                    <li><Link to='/blogr'><Typography fontWeight={250}> Blog</Typography></Link></li>
                    <li><Link to='/careers'><Typography fontWeight={250}> Careers</Typography></Link></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <Typography >Support</Typography>
                <ul className="footer_list">
                    <li><Link to='/document-generator'><Typography fontWeight={250}> Contact Us</Typography></Link></li>
                    <li><Link to='/template-generator'><Typography fontWeight={250}> Support</Typography></Link></li>
                    <li><Link to='/document-example'><Typography fontWeight={250}>Terms & Conditions</Typography></Link></li>
                    <li><Link to='/how-to-write-document'><Typography fontWeight={250}>Privacy Policy</Typography></Link></li>
                </ul>
            </div>
        </Box>)
    }
}