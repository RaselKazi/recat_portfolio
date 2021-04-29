import React from 'react';
// import { Link } from 'react-router-dom';
import './BrandsHowDoesItWorks.css';
import Fade from 'react-reveal/Fade';

const BrandsHowDoesItWorks = () => {
    return (
        <section className="how_does_area py-5 mt-0">
            <div className="container py-4">
                <div className="row my-4">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 text-center pb-4 brands_democracy_top">
                        <h2 className="h2-responsive text-white">How does it works?</h2>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                
                <div className="row">
                    <Fade left cascade>
                        <div className="col-md-3 col-sm-6 text-center mb-5">
                                <div className="single_brands_democracy border rounded py-5 px-3 hvr-float-shadow mx-2 text-white">
                                <span className="sl">1</span>
                                <span className="material-icons">phonelink</span>
                                <h3 className="h3-responsive">Create a campaign</h3>
                                <p className="p-responsive">Define your campaign with a creative brief, select the platform on which you want to promote and set the standards for influencers.</p>
                                {/* <Link to="/" target="_self" className="btn tb-btn tb-style1">Learn More</Link> */}
                                </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center mb-5">
                            <div className="single_brands_democracy border rounded py-5 px-3 hvr-float-shadow mx-2">
                            <span className="sl">2</span>
                            <span className="material-icons">archive</span>
                            <h3 className="h3-responsive">Launch your campaign</h3>
                            <p className="p-responsive">After done with all the required parameters, your campaign goes live on our Everipost app and ready to accept submissions.</p>
                            {/* <Link to="/" target="_self" className="btn tb-btn tb-style1">Learn More</Link> */}
                            </div>
                        </div>
                    </Fade>
                    <Fade right cascade>
                        <div className="col-md-3 col-sm-6 text-center mb-5">
                            <div className="single_brands_democracy border rounded py-5 px-3 hvr-float-shadow mx-2">
                            <span className="sl">3</span>
                            <span className="material-icons">flip</span>
                            <h3 className="h3-responsive">Select and Approve</h3>
                            <p className="p-responsive">You can review all the content on your dashboard where you can choose influencers on the basis of quality of content, followers, engagement ratio and other parameters.</p>
                            {/* <Link to="/" target="_self" className="btn tb-btn tb-style1">Learn More</Link> */}
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center mb-5">
                            <div className="single_brands_democracy border rounded py-5 px-3 hvr-float-shadow mx-2">
                            <span className="sl">4</span>
                            <span className="material-icons">grid_on</span>
                            <h3 className="h3-responsive">Approved content is posted</h3>
                            <p className="p-responsive">Everiposters will start posting approved content on their social media and share it with their loyal followers, if you want.</p>
                            {/* <Link to="/" target="_self" className="btn tb-btn tb-style1">Learn More</Link> */}
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default BrandsHowDoesItWorks;