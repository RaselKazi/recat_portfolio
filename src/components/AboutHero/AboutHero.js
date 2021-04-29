import React from 'react';
import './AboutHero.css';
import Fade from 'react-reveal/Fade';

const AboutHero = () => {
    return (
            <section className="about_area">
                <div className="container">
                    <Fade cascade>
                        <div className="row d-flex align-items-center">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 py-5 my-5">
                                <h2 className="h2-responsive text-center text-white py-5 my-5">A platform worth discussing</h2>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </Fade>
                </div>
                <div className="overlay"></div>
            </section>
    );
};

export default AboutHero;