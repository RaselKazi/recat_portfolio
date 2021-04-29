import React from 'react';
import './HomeChooseAPlan.css';

const HomeChooseAPlan = () => {
    const planArray = [
        {
            title: 'Starter',
            price: 10
        },
        {
            title: 'Pro',
            price: 29
        },
        {
            title: 'Premium',
            price: 39
        }
    ]
    return (
        <section className="chooseaplan_area bg-white">
            <div className="container py-5">
                <div className="row text-center pt-5 pb-3">
                    <div className="col-md-3 col-sm-6"></div>
                    <div className="col-md-6 col-sm-12">
                        <div className="chooseaplan_details">
                            <h2 className="h2-responsive">Choose a plan</h2>
                            <p className="p-responsive">Fitst see how your businesses are performing today. <br/>
Then do more with insights from Webify team.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6"></div>
                </div>
                <div className="row pb-5">
                    {
                        planArray.map(plan => (
                            <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
                                <div className="single_pricing_table border rounded hvr-float-shadow">
                                    <h3 className="h3-responsive text-center my-3">{plan.title}</h3>
                                    <hr/>
                                    <div className="price_box text-center py-1">
                                       <span className="price_currency">$</span>
                                       <span className="price">{plan.price}</span>
                                       <span className="price_time">/month</span>
                                    </div>
                                    <hr/>
                                    <div className="pricing_details py-4 px-5">
                                        <ul className="list-unstyled float-left">
                                            <li className="mb-2"><i className="fas fa-check me-2"></i>Full coverage + Follower boost</li>
                                            <li className="mb-2"><i className="fas fa-check me-2"></i>Random second feature</li>
                                            <li className="mb-2"><i className="fas fa-check me-2"></i>Another placeholder feature</li>
                                            <li className="mb-2"><i className="fas fa-check me-2"></i>100+ more extra features</li>
                                        </ul>
                                        <button className="btn text-center text-white w-100 py-2 hvr-glow">Purchase Now</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr className="my-0" />
        </section>
    );
};

export default HomeChooseAPlan;