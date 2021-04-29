import React, { useContext } from 'react';
import StrongCustomer from '../../images/about/strong_cus.png';
import Signature from '../../images/about/Signature.png';
import './AboutStrongCustomer.css';
import { FooterHeightContext } from '../../App';

const AboutStrongCustomer = () => {
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
        <section className="strong_customer_area bg-white" style={mB ? {MarginBottomZero} : MarginBottom}>
            <div className="container py-5">
                <div className="row pt-5 pb-4">
                    <div className="col-md-0"></div>
                    <div className="col-md-12">
                        <div className="strong_customer_details">
                             <h3 className="h3-responsive mb-3">Everipost is the creative platform based on industry 4.0 technologies that makes it easy for brands to collaborate with content creators and influencers at any scale. And, we believe that brands can benefit most when they market with people, and not at people.</h3>
                             {/* <p className="p-responsive me-5 pr-5">Client social proof funding innovator. First mover advantage business-to-consumer customer vesting period premium term sheet venture rate learning curve for startups in valley for life.</p>
                             <p className="p-responsive me-5 pr-5">Funding innovator always irst mover advantage business-to-consumer customer vesting period freemium termsheet venture rate learning.curve focused drive for success.</p> */}
                             {/* <img className="img-fluid" src={Signature} alt={Signature} /> */}
                        </div>
                    </div>
                    <div className="col-md-0"></div>
                    {/* <div className="col-md-5">
                        <div className="strong_customer_img d-flex justify-content-center">
                            <img className="img-fluid" src={StrongCustomer} alt={StrongCustomer} />
                        </div>
                    </div> */}
                </div>
                <div className="row pb-5 pt-4">
                    <div className="col-md-12">
                        <h3 className="p-responsive me-5 pr-5 mb-3">Our mission</h3>
                        <ul >
                            <li className="mb-2">To empower content creators and influencers by providing opportunities for learning, growth, and sustainability</li>
                            <li className="mb-2">To help businesses experience word of mouth marketing at any scale and boost business bottom lines through influencer activities</li>
                            <li className="mb-2">To bring more transparency between creators and brands with Blockchain based platform</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStrongCustomer;