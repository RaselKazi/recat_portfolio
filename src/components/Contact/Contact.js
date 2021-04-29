import React from 'react';
import GetInTouch from '../GetInTouch/GetInTouch';
import HeroContact from '../HeroContact/HeroContact';
import JoinCommunity from '../JoinCommunity/JoinCommunity';
import FooterArea from '../FooterArea/FooterArea';
import Navbar from '../Navbar/Navbar';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Contact = () => {
    const ContactArray = {
        title: 'Get a Personal Consultation',
        subtitle: 'We look forward to showing how Everipost can help you efficiently and effectively create campaigns and execute your influencer and creative content strategies.'
    }
    return (
        <section>
            <Navbar />
            <HeroContact title={ContactArray} />
            <GetInTouch />
            <JoinCommunity />
            <FooterArea />
            <ScrollToTop />
        </section>
    );
};

export default Contact;