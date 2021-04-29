import React from 'react';
import BrandsDemocracy from '../BrandsDemocracy/BrandsDemocracy';
import ChartImage from '../ChartImage/ChartImage';
import DownloadWallpaper from '../DownloadWallpaper/DownloadWallpaper';
import FooterArea from '../FooterArea/FooterArea';
import HeroArea from '../HeroArea/HeroArea';
import ImageComperission from '../ImageComperission/ImageComperission';
import Navbar from '../Navbar/Navbar';
import ParallaxArea from '../ParallaxArea/ParallaxArea';
// import PricingArea from '../PricingArea/PricingArea';
// import TestimonialArea from '../TestimonialArea/TestimonialArea';
import ChartImg from '../../images/chartImage.png';
import BrandsTabArea from '../BrandsTabArea/BrandsTabArea';
import BrandsHowDoesItWorks from '../BrandsHowDoesItWorks/BrandsHowDoesItWorks';
import BrandsSocialArea from '../BrandsSocialArea/BrandsSocialArea';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Home = () => {
    const mB = {
        mB : 0
    }
    const chartImg = {
        id: 1,
        img: ChartImg
    }
    const downloadArray ={
        title: 'If you’re an Influencers or creator, then download the app now.',
        button: 'Download The App'
    }
    const tabArray = [
        {
            title: 'How much time do you take to make the campaign live?',
            body: 'The faster the brand can approve the campaign brief, the shorter the time. In general, campaigns can go up within 1 or 2 days after signing of quotation.'
        },
        {
            title: 'Can Everipost ensure that the creators/influencers will not post before the content is approved?',
            body: 'While we cannot restrict what they post on their own social media accounts, the payout will only be given to the posts that are approved by the brands as they followed the campaign guidelines and fulfilled the requirements.'
        },
        {
            title: 'Is it possible to run a campaign for CSR?',
            body: 'Absolutely, yes. Connect with us today to find out more!'
        }
    ]
    return (
        <div>
            <Navbar />
            <HeroArea />
            <BrandsDemocracy />
            <BrandsHowDoesItWorks />
            <ChartImage key={chartImg.id} img={chartImg.img} />
            <ImageComperission />
            <ParallaxArea />
            {/* <TestimonialArea />
            <PricingArea /> */}
            <BrandsTabArea tabArray={tabArray} mB={mB} />
            <BrandsSocialArea />
            <DownloadWallpaper download={downloadArray} />
            <FooterArea />
            <ScrollToTop />
        </div>
    );
};

export default Home;