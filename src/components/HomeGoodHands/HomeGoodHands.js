import React from 'react';
import './HomeGoodHands.css';
import Fade from 'react-reveal/Fade';

const HomeGoodHands = () => {
    const GoodHandsArray =[
        {
            id: 1,
            icon: 'fas fa-user p-3',
            title: 'Anyone can join!',
            desc: 'No minimum followers. Let your content do the talking.'
        },
        {
            id: 2,
            icon: 'fas fa-flask p-3',
            title: 'Easy to use',
            desc: 'Discover exciting campaigns, submit photos, and craft captions all in one app.'
        },
        {
            id: 3,
            icon: 'fas fa-trophy p-3',
            title: 'Withdraw instantly',
            desc: 'Withdraw your earnings securely to your bank account with just one tap.'
        }
    ]
    return (
        <section className="good_hands_area bg-white">
            <div className="container py-5">
                <div className="row text-center pt-5 pb-3">
                    <div className="col-md-3 col-sm-12"></div>
                    <div className="col-md-6 col-sm-12">
                        <Fade cascade>
                            <div className="good_hands_details">
                                <h2 className="h2-responsive">Click, post, earn !</h2>
                                <p>Select a campaign you like and submit your post for the brand’s approval. Once it's approved, share it on social media to start earning!</p>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-3 col-sm-12">
                    </div>
                </div>
                <Fade cascade>
                    <div className="row pb-5">
                        {
                            GoodHandsArray.map(good => (
                                <div key={good.id} className="col-md-4 col-sm-12">
                                    <div className="single_good_hands d-flex justify-content-center p-3">
                                        <div className="icon_box text-center me-2">
                                        <i className={good.icon}></i>
                                        </div>
                                        <div className="single_good_hands_details">
                                            <h3 className="h3-responsive">{good.title}</h3>
                                            <p className="p-responsive">{good.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default HomeGoodHands;