import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentAvailable from '../AppointmentAvailable/AppointmentAvailable';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader
                date={date}
                setDate={setDate}
            ></AppointmentHeader>
            <AppointmentAvailable date={date} setDate={setDate}></AppointmentAvailable>
            <Footer/>
        </div>
    );
};

export default Appointment;