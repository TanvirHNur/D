import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
const bannerBg = {
    background: `url(${bg})`,
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item style={{...verticalCenter,textAlign: 'left'}} xs={12} md={6}>

            <Box>
            <Typography variant="h3">
                Your New smile <br />
                Starts Here
            </Typography>
            <Typography variant="h6" sx={{fontSize: 13, my: 3, fontWeight: 300, color: 'gray'}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas officiis pariatur sint odit, cum facilis. Sint labore quia quidem eum.
            </Typography>
            <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Get Appointment</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
              <img style={{width: '350px'}} src={chair} alt="" />
          </Grid>
         
        </Grid>
      </Container>
    );
};

export default Banner;