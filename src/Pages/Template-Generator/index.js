import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Modal} from '@mantine/core';
import { TextField,Box,Button,Checkbox,FormControlLabel } from '@mui/material';
import './templateGenerator.css';
import AppBar from '../../Components/AppBar-AfterLogIn';
export default function TemplateGenerator(){
    const [alignment, setAlignment] = useState('');
    const [modalSection,setModalSection] = useState(false);
    const [modalSubsection,setModalSubsection] = useState(false);
    const subsection = {};
    const handleAlignment = (event) => {
        setAlignment(event.target.value);
    };

    return (<section>
        <AppBar/>
        <div className='accordion_container'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    <Box className="form_container">
      <Modal opened={modalSection} onClose={()=>setModalSection(false)} title="Add SubSection for the Main Section">
        <TextField label="Subsection Title" required type='text' fullWidth  margin="normal"/>
        <Button variant='contained'>Add</Button>
      </Modal>
      <Modal opened={modalSubsection} onClose={()=>setModalSubsection(false)} title="Add SubSection for the selected Subsection">
        <TextField label="Subsection Title" required type='text' fullWidth  margin="normal"/>
        <Button variant='contained'>Add</Button>
      </Modal>
       <TextField
                margin="normal"
                required
                fullWidth
                id="template_name"
                label="Template Name"
                name="template_name"
                autoComplete="template_name"
                autoFocus
              />
        <Typography>Cover Page (Optional)</Typography>
            <Button variant="contained" component="label">Upload Cover Page
              <input
                type="file"
                hidden
              />
            </Button>
        <div>
            <TextField label="Section Title" required type='text' fullWidth  margin="normal"/>
            <TextField label="Font Size" required type='number' fullWidth  margin="normal"/>
            <TextField label="Font Family" required type='text' fullWidth  margin="normal"/>
            <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Alignment</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={alignment}
                label="ALignment"
                onChange={handleAlignment}
                >
                    <MenuItem value={'Left'}>Left</MenuItem>
                    <MenuItem value={'Center'}>Center</MenuItem>
                    <MenuItem value={'Right'}>Right</MenuItem>
                    <MenuItem value={'Justify'}>Justify</MenuItem>
                </Select>
            </FormControl>
            <TextField label="Spacing" required type='number' fullWidth InputProps={{ inputProps: { min: 8, max: 10 } }}  margin="normal"/>
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Image is Required in the Section"
                sx={{display:'block',width:'100%'}}
              />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Table is Required in the Section"
                sx={{display:'block',width:'100%'}}
            />
            <Accordion className='subsection_list'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{textAlign:'right'}}>
          <Typography align='left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Button variant='contained' onClick={()=>setModalSubsection(true)}>Add Another Subsection</Button>
        </AccordionDetails>
      </Accordion>
            <Button variant='contained' sx={{marginTop:'15px'}} onClick={()=>setModalSection(true)}>Add Subsection</Button>
        </div>
    </Box>
    </section>);
}