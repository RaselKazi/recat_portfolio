import React from 'react';
import { Link } from 'react-router-dom';
import Better1 from '../../images/about/business_better1.jpg';
import Better2 from '../../images/about/business_better2.jpg';
import Better3 from '../../images/about/business_better3.jpg';
import './AboutBusinessBetter.css';

const AboutBusinessBetter = () => {
    const BetterArray = [
        {
            img: Better1,
            title: 'Year in Review | 2018'
        },
        {
            img: Better2,
            title: 'Year in Review | 2018'
        },
        {
            img: Better3,
            title: 'Year in Review | 2018'
        }
    ]
    return (
        <section className="business_better_area bg-white">
            <div className="container py-5">
                <div className="row pt-5 mb-3">
                    <div className="col-md-6 business_better_details">
                        <h2 className="h2-responsive">We make your business better.</h2>
                        <p className="p-responsive">We Circle back push back for game plan it's a simple lift and shift job or not enough bandwidth to go forward in style.</p>
                    </div>
                </div>
                <div className="row pb-5">
                    {
                        BetterArray.map(better => (
                            <div className="col-md-4 text-center">
                                <div className="single_business_better tb-zoom">
                                    <img className="w-100 tb-zoom-in1 " src={better.img} alt=""/>
                                    <div className="better_meta px-3 py-4">
                                        <h3 className="h3-responsive">{better.title}</h3>
                                        <p className="p-responsive">Yin yoga is a slow-paced style of yoga with postures, or asanas, that are held for longer periods of time.</p>
                                        <Link to="/" target="_self" className="tb-btn tb-style1 text-decoration-none">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default AboutBusinessBetter;