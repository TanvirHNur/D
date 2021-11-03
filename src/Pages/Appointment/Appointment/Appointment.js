import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentAvailable from '../AppointmentAvailable/AppointmentAvailable';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader/>
            <AppointmentAvailable></AppointmentAvailable>
        </div>
    );
};

export default Appointment;