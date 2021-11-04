import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmenBanner from '../AppointmenBanner/AppointmenBanner';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
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
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;