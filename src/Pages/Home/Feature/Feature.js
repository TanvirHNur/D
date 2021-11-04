import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png'
import { Button, Container, Typography } from '@mui/material';

const Feature = () => {
    return (
        <Container sx={{mt: 4}}>
            <Grid container spacing={3} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6} >
            <img src={treatment} style={{width: '80%', height: '70vh'}} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
        <Typography variant="h2" sx={{color: 'text.primary' , mb: 3}}> Exceptional Dental care, on Your Terms</Typography>
        <Typography variant="h6" sx={{color: 'text.secondary' , mb: 3, fontSize: '14px'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore delectus id, cumque quis incidunt sint sed cupiditate ducimus nostrum, vero et doloribus iusto, facere voluptatum asperiores veniam nventore delectus id, cumque quis incidunt sint sed cupiditate ducimus nostrum, vero et doloribus iusto, facere voluptatum asperiores veniamnventore delectus id, cumque quis incidunt sint sed cupiditate ducimus nostrum, vero et doloribus iusto, facere voluptatum asperiores veniamnumquam rem? Delectus. </Typography>
        <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Learn More</Button>
        </Grid>
       
      </Grid>
        </Container>
    );
};

export default Feature;