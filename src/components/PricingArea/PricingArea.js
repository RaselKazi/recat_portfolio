import React from 'react';
import './PricingArea.css';

const PricingArea = () => {
    return (
        <section className ="pricing_area bg-white">
            <div className="container">
                <div className="row text-center mb-3">
                    <div className="col-md-12 pricing_top">
                        <h2 className="h2-responsive">Simple pricing for you</h2>
                        <p>Fitst see how your businesses are performing today. <br/>Then do more with insights from Webify team.</p>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-3 col-sm-6 p-0 pricing_table_left_col mb-5">
                        <ul className="list-group rounded-0 pricing_table_left">
                            <li className="list-group-item">JQuery Components</li>
                            <li className="list-group-item">Flexible UI</li>
                            <li className="list-group-item">Bootstrap 4.0</li>
                            <li className="list-group-item">PHP FIles</li>
                            <li className="list-group-item">Design System</li>
                            <li className="list-group-item">Software Updates</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 p-0 text-center mb-5">
                        <ul className="list-group rounded-0 single_pricing_table">
                            <li className="list-group-item pricing_title bg-light">Standard</li>
                            <li className="list-group-item"><sup className="pricing_currency">$</sup><span className="pricing_value">29</span><br/><button className="btn btn-primary w-100 mt-3 py-2 hvr-float-shadow">Get Started</button></li>
                            <li className="list-group-item"><span className="material-icons">done</span></li>
                            <li className="list-group-item"><span className="material-icons">done</span></li>
                            <li className="list-group-item"><span className="material-icons text-secondary">highlight_off</span></li>
                            <li className="list-group-item">Exclusive</li>
                            <li className="list-group-item">Unlimited</li>
                            <li className="list-group-item">Limited</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 p-0 text-center mb-5">
                        <ul className="list-group rounded-0 single_pricing_table">
                            <li className="list-group-item pricing_title bg-light">Pro</li>
                            <li className="list-group-item"><sup className="pricing_currency">$</sup><span className="pricing_value">39</span><br/><button className="btn btn-primary w-100 mt-3 py-2 hvr-float-shadow">Get Started</button></li>
                            <li className="list-group-item"><span className="material-icons">done</span></li>
                            <li className="list-group-item"><span className="material-icons">done</span></li>
                            <li className="list-group-item"><span className="material-icons text-secondary">highlight_off</span></li>
                            <li className="list-group-item">Exclusive</li>
                            <li className="list-group-item">Unlimited</li>
                            <li className="list-group-item">Limited</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 p-0 text-center mb-5">
                        <ul className="list-group rounded-0 single_pricing_table">
                            <li className="list-group-item pricing_title bg-light">Standard</li>
                            <li className="list-group-item"><sup className="pricing_currency">$</sup><span className="pricing_value">49</span><br/><button className="btn btn-primary w-100 mt-3 py-2 hvr-float-shadow">Get Started</button></li>
                            <li className="list-group-item"><span className="material-icons">done</span></li>
                            <li className="list-group-item"><span className="material-icons">done</span></li>
                            <li className="list-group-item"><span className="material-icons">done</span></li>
                            <li className="list-group-item">Exclusive</li>
                            <li className="list-group-item">Unlimited</li>
                            <li className="list-group-item">Limited</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingArea;