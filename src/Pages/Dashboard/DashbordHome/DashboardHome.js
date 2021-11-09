
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';
import { Box } from '@mui/system';
import React from 'react';

const DashboardHome = () => {  
    const [date, setDate] = React.useState(new Date());

    return (
        <Box>
            <Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={5}>
      <Calender
       date={date} 
       setDate={setDate} />
  </Grid>
  <Grid item xs={12} sm={12} md={7}>
      <Appointments date={date}></Appointments>
  </Grid>
</Grid>
        </Box>
    );
};

export default DashboardHome;