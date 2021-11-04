import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmenBanner from '../AppointmenBanner/AppointmenBanner';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner/>
            <Services></Services>
            <Feature/>
            <AppointmenBanner></AppointmenBanner>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;