import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
// import AboutBusinessBetter from '../AboutBusinessBetter/AboutBusinessBetter';
import AboutHero from '../AboutHero/AboutHero';
// import AboutParallax from '../AboutParallax/AboutParallax';
// import AboutServeYou from '../AboutServeYou/AboutServeYou';
import AboutStrongCustomer from '../AboutStrongCustomer/AboutStrongCustomer';
import CarouselArea from '../CarouselArea/CarouselArea';
import FooterArea from '../FooterArea/FooterArea';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <AboutHero />
            <CarouselArea />
            <AboutStrongCustomer />
            {/* <AboutParallax />
            <AboutBusinessBetter />
            <AboutServeYou /> */}
            <FooterArea />
        </div>
    );
};

export default AboutUs;