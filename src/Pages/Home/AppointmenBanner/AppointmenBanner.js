import React from 'react';
import Bounce from 'react-reveal/Fade';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import appointmenImg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmenbanner = {
    background: `url(${appointmenImg})`,
    backgroundColor: 'rgba(45,58,74, .9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmenBanner = () => {
    return (
      <Bounce left>
        <Box style={appointmenbanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img 
            style={{
                width: 400,
                marginTop: '-120px'
            }} src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
           <Box>
           <Typography variant="h6" sx={{mb:5}} style={{color: '#5CE7ED'}}>
                Appointment
            </Typography>
            <Typography variant="h4" style={{color: 'white', fontWeight: 600}}>
               Make an Appointment Today
            </Typography>
            <Typography variant="h6" sx={{my:5}} style={{color: 'white', fontSize: '14px', fontWeight: 300}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corrupti obcaecati. Odit neque tenetur sint rem optio ut unde vitae.
            </Typography>

            <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Learn more</Button>
           </Box>
          </Grid>
          
        </Grid>
      </Box>
      </Bounce>
    );
};

export default AppointmenBanner;