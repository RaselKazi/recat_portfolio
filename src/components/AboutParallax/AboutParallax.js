import React from 'react';
import { Line} from 'rc-progress';
import './AboutParallax.css';

const AboutParallax = () => {
    const progressBarArray= [
        {
            percentage: 94,
            title: 'jQuery'
        },
        {
            percentage: 80,
            title: 'PHP'
        },
        {
            percentage: 70,
            title: 'WordPress'
        },
        {
            percentage: 80,
            title: 'Design'
        }
    ]
    return (
        <section className="about_parallax_area">
            <div className="about_overlay"></div>
            <div className="container py-5">
                <div className="row pt-5">
                    <div className="row mb-3">
                        <div className="col-md-5 about_parallax_details float_left">
                            <h2 className="h2-responsive text-white">A fast & agile approach to project creation.</h2>
                        </div>
                    </div>
                    <div className="row pb-5">
                        {
                            progressBarArray.map(progress =>(
                                <div className="col-md-6 mb-3">
                                    <div className="single_progressbar">
                                        <h4 className="h4-responsive text-white mb-1">{progress.percentage}%</h4>
                                        <Line percent={progress.percentage} strokeWidth="2" trailWidth="2" strokeColor="#ffffff" trailColor="rgba(255,255,255,0.2)" />
                                        <h6 className="h6-responsive text-white">{progress.title}</h6>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutParallax;