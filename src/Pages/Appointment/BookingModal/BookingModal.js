import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';
import { ConstructionOutlined } from '@mui/icons-material';
import { Alert } from '@mui/material';

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




const BookingModal = ({openBooking, handleCloseBooking, booking, date, setBookingSucces}) => {
    const {name, time}=booking;
    const {user} = useAuth();
    const initailInfo = {patientName: user.displayName, email: user.email, phone: ''} 
    const [bookinginfo, setBookingInfo] = useState(initailInfo);

    const handleOnBlur = (e) => {
      const field = e.target.value;
      const value = e.target.value;
      const newInfo = {...bookinginfo};
      newInfo[field] = value;
      // console.log(newInfo)
      setBookingInfo(newInfo);
    }
    const  handleBookingSubmit=e=> {
      const appointment = {
        ...bookinginfo,
        time: time,
        servicesName: name,
        date: date.toLocaleDateString()
      };

      //send data to db
      fetch('http://localhost:5000/appointments', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(appointment)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          setBookingSucces(true)
          handleCloseBooking();
        }
      })
      
      
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
            <form onSubmit={handleBookingSubmit}>
            <TextField sx={{width: '90%', mb: 3}}
          id="filled-size-small"
          defaultValue={time}
          variant="filled"
          size="small" disabled
        />
            <TextField sx={{width: '90%', mb: 3}}
          id="filled-size-small"
          name="patientName"
          onBlur={handleOnBlur}
          defaultValue={user.displayName}
          variant="filled"
          size="small"
          placeholder="Patient Name"
        />
            <TextField sx={{width: '90%', mb: 3}}
          id="filled-size-small"
          name="phone"
          onBlur={handleOnBlur}
          variant="filled"
          size="small"
          placeholder="Phone"
        />
            <TextField sx={{width: '90%', mb: 3}}
          id="filled-size-small"
          name="email"
          variant="filled"
          onBlur={handleOnBlur}
          size="small"
          defaultValue={user.email}
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