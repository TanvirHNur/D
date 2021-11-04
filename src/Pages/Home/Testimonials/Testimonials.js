import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import person1 from '../../../images/people-1.png'
import person2 from '../../../images/people-2.png'
import person3 from '../../../images/people-3.png'
import Testmonial from '../Testimonial/Testmonial';

const patients =[
    {id: 1, location: 'New York', name: 'Winson Herry', img: person1, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reprehenderit odio optio omnis illum soluta quia id, natus blanditiis commodi eligendi, incidunt similique nulla vero hic, obcaecati quasi quod eos.'},
    {id: 2, location: 'New York', name: 'Winson Herry', img: person2, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reprehenderit odio optio omnis illum soluta quia id, natus blanditiis commodi eligendi, incidunt similique nulla vero hic, obcaecati quasi quod eos.'},
    {id: 3, location: 'New York', name: 'Winson Herry', img: person3, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reprehenderit odio optio omnis illum soluta quia id, natus blanditiis commodi eligendi, incidunt similique nulla vero hic, obcaecati quasi quod eos.'}
]
const Testimonials = () => {
    return (
        <Container>
            <Box sx={{textAlign: 'left', mt:6}}>
            <Typography variant="h6" style={{color: '#5CE7ED'}}>
                Testimonial
            </Typography>
            <Typography variant="h3">
                What's Our Patients <br />
                Says
                
            </Typography>
            </Box>

            <Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
            {
                patients.map(patient => <Testmonial
                    key={patient.id}
                    patient={patient}
                ></Testmonial> )
            }
          </Grid>
            </Box>

        </Container>
    );
};

export default Testimonials;