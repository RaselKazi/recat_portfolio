import React from 'react';
// import ParallaxBg from '../../images/parallax-bg.jpg';
import mobile from '../../images/mobile.png';
import './ParallaxArea.css';
import Fade from 'react-reveal/Fade';

const ParallaxArea = () => {
    return (
        <section className="parallax_area parallax">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="row">
                            <div className="col-md-12 text-white parallax_details">
                                <h2 className="h2-responsive">Get everything Organized. <br/>All-in-one for creative/creators and social/ Influencers.</h2>
                                <p className="p-responsive">Discover, develop relationships, collaborate, and see reports on performance all-in-one place.</p>
                            </div>
                        </div>
                        <Fade bottom cascade>
                            <div className="row text-white my-4">
                                <div className="col-md-4 col-sm-12 mb-4">
                                    <div className="single_parallax_item">
                                        <div className="single_parallax_icon mb-3">
                                            <span className="material-icons">flip</span>
                                        </div>
                                        <h3 className="h3-responsive">Payments</h3>
                                        <p className="p-responsive">We handle all creator payouts.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 mb-4">
                                    <div className="single_parallax_item">
                                        <div className="single_parallax_icon mb-3">
                                            <span className="material-icons">crop</span>
                                        </div>
                                        <h3 className="h3-responsive">Legal</h3>
                                        <p className="p-responsive">Contracts are built into our creating the campaign page. It is a binding agreement between brand and creator.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 mb-4">
                                    <div className="single_parallax_item">
                                        <div className="single_parallax_icon mb-3">
                                            <span className="material-icons">track_changes</span>
                                        </div>
                                        <h3 className="h3-responsive">Discover</h3>
                                        <p className="p-responsive">Find creators and influencers by location, demographic, skill, keyword or network.</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-5 parrallax_mobile">
                        <Fade cascade>
                            <img className="img-fluid w-100" src={mobile} alt={mobile} />
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParallaxArea;