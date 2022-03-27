import {Card,CardMedia,CardContent,Typography,Box} from '@mui/material';
import choose from '../../images/choice.jpg';
import edit from '../../images/edit.jpg';
import download from '../../images/download.jpg';
import './documentWorks.css';

export default function HowItWorksForDocument(){
    return (<section className='documentWorks'>
        <Typography variant='h3' className='headline'>How to Use it as Document Generator</Typography>
        <hr style={{width:'100px',borderTop:'solid #2eaf6a 3px'}}/>
        <Box className='cardContainer'>
            <Card className='cardClass'>
                <CardMedia
                    component="img"
                    height="194"
                    image={choose}
                    alt="Choose Template"
                    />
                <CardContent>
                    <Typography>There are tens or thousands of templates to choose from and write your documents. You don't have to worry about the templates because the templates are verified by professionals</Typography>
                </CardContent>
            </Card>
            <Card className='cardClass'>
                <CardMedia
                    component="img"
                    height="194"
                    image={edit}
                    alt="Edit Template"
                    />
                <CardContent>
                    <Typography>Write your document as you like without any worries because we are in every step of the way guiding you to follow the best practices and generate some part of it for you</Typography>
                </CardContent>
            </Card>
            <Card className='cardClass'>
                <CardMedia
                    component="img"
                    height="194"
                    image={download}
                    alt="Download Document"
                    />
                <CardContent>
                 <Typography>After you have finished writing your document, You have the choice to download the document as PDF or Word document. You also can download both version. Then you are good to go</Typography>
                </CardContent>
            </Card>
        </Box>
    </section>);
}