import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';



const services =[
    {name: 'fluoride Treatment',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptatem. Dignissimos unde ab iusto sint repellat, eius eaque nam rerum iste ducimus exercitationem aut libero sit natus architecto quasi alias.',
    img: fluoride},
    {name: 'Cavity Filling',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptatem. Dignissimos unde ab iusto sint repellat, eius eaque nam rerum iste ducimus exercitationem aut libero sit natus architecto quasi alias.',
    img: cavity},
    {name: 'Teeth Whitening',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptatem. Dignissimos unde ab iusto sint repellat, eius eaque nam rerum iste ducimus exercitationem aut libero sit natus architecto quasi alias.',
    img: Whitening }
]

  
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Typography sx={{ color: 'success.main', m: 2 }} variant="h6" component="div">
         Our Services
        </Typography>
            <Typography sx={{ fontWeight: 600, m:2 }} variant="h4" component="div">
          Services We Provide
        </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                services.map(service => <Service
                key={service.name}
                service={service}
                ></Service> )
            }
            </Grid>
            </Container>
         </Box>
    );
};

export default Services;