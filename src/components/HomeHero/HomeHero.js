import React from 'react';
import TextLoop from "react-text-loop";
import HeroImage from '../../images/home/heroimage.png';
import './HomeHero.css';
import Fade from 'react-reveal/Fade';

const HomeHero = () => {
    return (
        <section className="home_hero_area bg-white">
            <hr className="mt-0" />
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-md-3 col-sm-12"></div>
                        <Fade cascade>
                            <div className="col-md-6 col-sm-12">
                                <h1 className="h1-responsive mt-5 pt-4 mb-3"><TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                <span>Click</span>
                <span>Post</span>
                <span>Earn by</span>
            </TextLoop> what you love.</h1>
                                <p className="p-responsive">Everipost is an app that rewards you by sharing the things you love. Make money by making unique content on social media for a variety of brands. <br/>Find out how much your contents & followers are worth.</p>
                                <form className="tb-hero-form tb-style1">
                                    <input className="mb-2" type="email" name="ne" required="" placeholder="Instagram username" />
                                    <button className="btn text-white btn-primary py-2 px-4 hvr-glow">Calculate</button>
                                </form>
                            </div>
                    </Fade>
                    <div className="col-md-3 col-sm-12"></div>
                </div>
                <div className="row text-center">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="hero_image">
                            <img className="mb-2 img-fluid" src={HeroImage} alt={HeroImage} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;