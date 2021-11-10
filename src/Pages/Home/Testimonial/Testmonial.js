import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Testmonial = ({patient}) => {
    const {name, img, des, location}=patient;
    return (
        
        <Grid item xs={3} sm={4} md={4}>
             <Card sx={{ minWidth: 275 }}>
      <CardContent style={{boxShadow: '10px 10px 20px #d3d3d3'}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {des}
        </Typography>
        <Box sx={{display: 'flex' , justifyContent: 'space-evenly'}}>
        <Box>
        <Typography variant="h5" component="div" style={{color: '#5CE7ED'}}>
          {name}
        </Typography><Typography variant="h6" component="div">
          {location}
        </Typography>
        </Box>
        <CardMedia
        component="img"
        style={{width: '70px'}}
        image={img}
        alt="Paella dish"
      />
        </Box>
        
      </CardContent>
    </Card>
        </Grid>
    );
};

export default Testmonial;