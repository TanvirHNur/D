import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({booking, date}) => {
    const {name, time, space}=booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpenBooking = () => setOpenBooking(true);
    const handleCloseBooking = () => setOpenBooking(false);
    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{p:5}}>
            <Typography sx={{color: 'info.main' , fontWeight: 600}} variant="h5" gutterBottom component="div">
                {name}
            </Typography>
            <Typography variant="h4" gutterBottom component="div">
                {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom> 
                {space} Spaces Available
            </Typography>
            <Button variant="contained" onClick={handleOpenBooking}>Book Appointment</Button>
            </Paper>
        </Grid>
        <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleCloseBooking={handleCloseBooking}
        ></BookingModal>
        </>
    );
};

export default Booking;