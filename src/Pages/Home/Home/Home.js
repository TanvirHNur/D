import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmenBanner from '../AppointmenBanner/AppointmenBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner/>
            <Services></Services>
            <AppointmenBanner></AppointmenBanner>
        </div>
    );
};

export default Home;