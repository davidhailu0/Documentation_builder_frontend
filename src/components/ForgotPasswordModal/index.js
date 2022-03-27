import Box from '@mui/material/Box';
import {TextField,Button} from '@mui/material'
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ForgotPasswordModal({modalStatus,changeStatus}) {
  const handleClose = () => changeStatus(false);
  const [emailValue,setEmail] = useState('');
  return (
    <div>
      <Modal
        open={modalStatus}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component='form' >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Reset Password
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2,mb:2 }}>
           Enter Your Email Address and a reset link will be sent to your Email Address
          </Typography>
          <TextField fullWidth autoFocus type='email' label='Email Address' required sx={{mb:2}} value={emailValue} onChange={(e)=>{
              setEmail(e.target.value);
          }}/>
          <Button variant='contained' type='submit' sx={{textAlign:'center',margin:"0 auto",width:'100%'}} onClick={(e)=>{
            e.preventDefault();
            console.log(emailValue);
          }}>Send Reset Link</Button>
        </Box>
      </Modal>
    </div>
  );
}
