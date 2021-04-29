import React from 'react';
import HowItSlider from '../HowItSlider/HowItSlider';
import './HomeHowIt.css';

const HomeHowIt = () => {
    const howit = {
        right: 1
    }
    const howItArray = [
        {
            id: 1,
            title: 'Select a campaign',
            sub: 'Browse from a wide variety of campaigns and pick one that you like.'
        },
        {
            id: 2,
            title: 'Submit your post',
            sub: 'Click a photo and submit your content based on the campaign requirements. Your post will then be sent to the brand for approval.'
        },
        {
            id: 3,
            title: 'Post on your social media or don’t',
            sub: 'Once your content is approved by the brand, you can then share your post on social media with your friends and followers or Brands repurpose your content and no posting is required on your end.'
        },
        {
            id: 4,
            title: 'Get Paid',
            sub: 'Withdraw your earnings from the app to your bank account with just the tap of a button!'
        }
    ]
    return (
        <section className="how_it_area bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h2 className="mt-4 mb-3">How does it work</h2>
                    </div>
                    <div className="col-md-5"></div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <HowItSlider key={howItArray.id} right={howit} howItArray={howItArray} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHowIt;