import React, { useContext } from 'react';
import { FooterHeightContext } from '../../App';
import Team from '../Team/Team';
import './AboutServeYou.css';

const AboutServeYou = () => {
    const dWidth = window.innerWidth;
    const [height] = useContext(FooterHeightContext);
    const mB = dWidth <= 767;

    const MarginBottom = {
        marginBottom: height,
    };

    const MarginBottomZero = {
        marginBottom: 0,
    };
    return (
        <section className="serve_you_area" style={mB ? {MarginBottomZero} : MarginBottom}>
            <div className="container py-5">
                <div className="row pt-5 mb-3">
                    <div className="col-md-12">
                        <h2 className="h2-responsive">We are always here to serve you.</h2>
                        <p className="p-responsive">We Circle back push back for game plan it's a simple lift and shift <br/>
job or not enough bandwidth to go forward in style.</p>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="container">
                        <Team />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutServeYou;