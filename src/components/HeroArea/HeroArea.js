import React from 'react';
import Mac from '../../images/mac.png';
import './HeroArea.css';
import Fade from 'react-reveal/Fade';

const HeroArea = () => {
    return (
        <section className="hero_area">
            <div className="container">
                <div className="row hero">
                    <div className="col-md-2 col-sm-12"></div>
                    <div className="col-md-8 col-sm-12">
                        <Fade cascade>
                            <div className="hero_details text-center text-white">
                                <h1 className="h1-responsive">EXPERIENCE THE POWER OF WORD-OF-MOUTH MARKETING AT LARGE SCALE</h1>
                                <p className="p-responsive py-2">Everipost with data-driven approach gives you full power to reach your potential audience with nano,micro,macro & mega influencers.</p>
                                <button className="btn bg-white rounded border px-4 py-2 hvr-shadow mb-3" type="submit">FREE CONSULTATION</button>
                            </div>
                        </Fade>
                        {/* <div className="hero_image">
                            <img className="img-fluid pt-4" src={Mac} alt={Mac} />
                        </div> */}
                    </div>
                    <div className="col-md-2 col-sm-12"></div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-sm-12"></div>
                    <div className="col-md-8 col-sm-12">
                        <div className="hero_image text-center">
                            <img className="img-fluid pt-4" src={Mac} alt={Mac} />
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12"></div>
                </div>
            </div>
            {/* Circle Animation */}
            <div className="tb-circle-shape-wrap">
                <div className="tb-circle-shape1"></div>
                <div className="tb-circle-shape2"></div>
                <div className="tb-circle-shape3"></div>
            </div>
            {/* Wave Animation */}
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
        </section>
    );
};

export default HeroArea;