import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const BookingModal = ({openBooking, handleCloseBooking, booking, date}) => {
    const {name, time}=booking;
    const  handleBookingSubmit=e=> {
      alert('Submitted');


      
      handleCloseBooking()
      e.preventDefault();
    }

    return (
        
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleCloseBooking}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h6">
              {name}
            </Typography>
            <form onClick={handleBookingSubmit}>
            <TextField sx={{width: '90%', mb: 3}}
          id="filled-size-small"
          defaultValue={time}
          variant="filled"
          size="small" disabled
        />
            <TextField sx={{width: '90%', mb: 3}}
          id="filled-size-small"
          defaultValue="Patient Name"
          variant="filled"
          size="small"
          placeholder="Patient Name"
        />
            <TextField sx={{width: '90%', mb: 3}}
          id="filled-size-small"
          variant="filled"
          size="small"
          placeholder="Phone"
        />
            <TextField sx={{width: '90%', mb: 3}}
          id="filled-size-small"
          variant="filled"
          size="small"
          placeholder="Email"
        />
         <TextField sx={{width: '90%', mb: 3}}
          id="filled-size-small"
          defaultValue={date.toDateString()}
          variant="filled"
          size="small" disabled
        />
        <Button type="submit" variant="contained">Book Now</Button>
            </form>

          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;