import { Container, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ContactImg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const ContactBanner = {
    background: `url(${ContactImg})`,
    backgroundColor: 'rgba(45,58,74, .9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}


const ContactUs = () => {
    
    return (
        <Box style={ContactBanner}>
            <Container>
            <Typography variant="h6" sx={{my:3, mt:3}} style={{color: '#5CE7ED'}}>
             CONTACT US
            </Typography>
            <Typography variant="h3" sx={{mb:5}} style={{color: 'white'}}>
            Always Connect With us
            </Typography>
            <TextField style={{
             backgroundColor: "white", marginBottom: '10px', width: '40%'
                }}id="standard-basic" label="" variant="standard" placeholder="Your Email" />
                <br />
            <TextField style={{
             backgroundColor: "white", marginBottom: '10px', width: '40%'
                }}id="standard-basic" label="" variant="standard" placeholder="Your Name*" />
                <br />
                <textarea style={{
             backgroundColor: "white", marginBottom: '10px', width: '40%', height: '140px'
                }}id="standard-basic" label="" variant="standard" placeholder="Your Massage" />
                <br />
                <Button style={{backgroundColor: '#5CE7ED'} }variant="contained" sx={{my: 5}}>Submit</Button>
            </Container>
            
        </Box>
    );
};

export default ContactUs;