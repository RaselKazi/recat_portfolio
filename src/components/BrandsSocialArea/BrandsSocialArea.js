import React from 'react';
import './BrandsSocialArea.css';
import Fade from 'react-reveal/Fade';

const BrandsSocialArea = () => {
    return (
        <section className="brands_social_area bg-white pb-5">
            <div className="container pb-5">
                <div className="row py-5">
                    <div className="col-md-12 text-center">
                        <h2 className="h2-responsive mb-5">All Networks & Mediums</h2>
                        <Fade bottom cascade>
                            <div className="row d-flex justify-content-evenly">
                                <div className="col-md-1 col-sm-4 col-6 social_icon">
                                <i className="fab fa-instagram"></i>
                                </div>
                                <div className="col-md-1 col-sm-4 col-6 social_icon">
                                <i className="fab fa-facebook"></i>
                                </div>
                                <div className="col-md-1 col-sm-4 col-6 social_icon">
                                <i className="fab fa-pinterest"></i>
                                </div>
                                <div className="col-md-1 col-sm-4 col-6 social_icon">
                                <i className="fab fa-youtube"></i>
                                </div>
                                <div className="col-md-1 col-sm-4 col-6 social_icon">
                                <i className="fab fa-twitter"></i>
                                </div>
                                <div className="col-md-1 col-sm-4 col-6 social_icon">
                                    <i className="fab fa-snapchat-ghost"></i>
                                </div>
                                <div className="col-md-1 col-sm-4 col-6 social_icon">
                                    <i className="fab fa-blogger"></i>
                                </div>
                            </div>
                        </Fade>
                        {/* <ul className="list-unstyled list-inline py-3 d-flex justify-content-evenly">
                            <li className="list-inline-item"><i className="fab fa-instagram"></i></li>
                            <li className="list-inline-item"><i className="fab fa-facebook"></i></li>
                            <li className="list-inline-item"><i className="fab fa-pinterest"></i></li>
                            <li className="list-inline-item"><i className="fab fa-youtube"></i></li>
                            <li className="list-inline-item"><i className="fab fa-twitter"></i></li>
                            <li className="list-inline-item"><i className="fab fa-snapchat-ghost"></i></li>
                            <li className="list-inline-item"><i className="fab fa-blogger"></i></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandsSocialArea;