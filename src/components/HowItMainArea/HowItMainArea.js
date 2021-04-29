import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import AppStore from '../../images/appleStore.svg';
import GooglePlay from '../../images/googlePlay.svg';
// import Left from '../../images/left.svg';
// import Right from '../../images/right.svg';
import { FooterHeightContext } from '../../App';
import './HowItMainArea.css';
import HowItSlider from '../HowItSlider/HowItSlider';

const HowItMainArea = () => {
    const dWidth = window.innerWidth;
    const [height] = useContext(FooterHeightContext);
    const mB = dWidth <= 767;

    const MarginBottom = {
        marginBottom: height,
    };

    const MarginBottomZero = {
        marginBottom: 0,
    };
       

    const howit = {
        right: 0
    }
    const howItArray = [
        {
            id: 1,
            title: 'Pick a campaign',
            sub: 'Browse from a wide variety of campaigns and pick one that you like.'
        },
        {
            id: 2,
            title: 'Submit your post',
            sub: 'Snap a photo and submit your post based on the campaign requirements. Your post will then sent to the brand for approval.'
        },
        {
            id: 3,
            title: 'Post on social media',
            sub: 'Once your post is approved by the brand, you can then share your post on social media with your friends and followers. The more engagement you receive, the more you earn!'
        },
        {
            id: 4,
            title: 'Withdraw your earnings',
            sub: 'Withdraw your earnings from the app to your bank account with just the tap of a button!'
        }
    ]
    return (
        <section className="howit_main_area bg-white" style={mB ? {MarginBottomZero} : MarginBottom}>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-12 py-5">
                        <HowItSlider  right={howit} howItArray={howItArray} />
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-6 mb-4">
                        <div className="single_how_it p-5">
                            <h3 className="h3-responsive">Brands & Agencies</h3>
                            <p className="p-responsive mb-4">Get thousands of Partiposters talking about your brand today.</p>
                            <button className="btn single_how_it_button text-white px-5 rounded shadow-lg py-2">LEARN MORE</button>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="single_how_it p-5">
                            <h3 className="h3-responsive">Join Partipost</h3>
                            <p className="p-responsive">Download the Partipost app today and start earning.</p>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><Link to="/"><img src={AppStore} alt={AppStore}/></Link></li>
                                <li className="list-inline-item"><Link to="/"><img src={GooglePlay} alt={GooglePlay}/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItMainArea;