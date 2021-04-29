import React from 'react';
import Navbar from '../Navbar/Navbar';
import HomeHero from '../HomeHero/HomeHero';
import CarouselArea from '../CarouselArea/CarouselArea';
import HomeGoodHands from '../HomeGoodHands/HomeGoodHands';
import HomeReleventData from '../HomeReleventData/HomeReleventData';
import FooterArea from '../FooterArea/FooterArea';
import DownloadWallpaper from '../DownloadWallpaper/DownloadWallpaper';
import HomeHowIt from '../HomeHowIt/HomeHowIt';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Nav from '../Nav/Nav';

const Home = () => {
    const downloadArray ={
        title: 'Earn by sharing what you love!',
        button: 'Download The App'
    }
    return (
        <div>
            <Navbar />
            <HomeHero id="section1" />
            {/* <Nav /> */}
            <CarouselArea />
            <HomeGoodHands />
            <HomeHowIt />
            {/* <HowItSlider right={howit} /> */}
            {/* <ChartImage key={analyzeImg.id} img={analyzeImg.img} /> */}
            <HomeReleventData />
            {/* <HomeChooseAPlan />
            <HomePeopleSaying />
            <MeetTheTeam />
            <HomeBusinessNews /> */}
            <DownloadWallpaper download={downloadArray} />
            <FooterArea />
            <ScrollToTop />
        </div>
    );
};

export default Home;