import React from 'react';
import Testimonial1 from '../../images/testimonial1.jpg';
import Testimonial2 from '../../images/testimonial2.jpg';
import Testimonial3 from '../../images/testimonial3.jpg';
import './TestimonialArea.css';

const TestimonialArea = () => {
    return (
        <section className="testimonial_area border-bottom bg-white">
            <div className="container">
                <div className="row text-center mb-4">
                    <div className="col-md-12 testimonial_top">
                        <h2 className="h2-responsive">But don’t take our work for it</h2>
                        <p className="p-responsive">See what people have to say about our product</p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="single_testimonial border rounded hvr-float-shadow">
                            <p className="py-4 px-3"><q>Pull in ten extra bodies to help roll the tortoise it just needs more agile team cowbell,cloud strategy and we need to dialog around your choice.</q></p>
                            <hr/>
                            <div className="single_testimonial_details">
                                <img className="rounded-circle mb-3" src={Testimonial1} alt={Testimonial1} />
                                <h5 className="h3-responsive pb-3">Pat Metheny</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single_testimonial border rounded hvr-float-shadow">
                            <p className="py-4 px-3"><q>Marketing is an adaptable system of guidelines, components, and tools that support the best practices of user interface design.</q></p>
                            <hr/>
                            <div className="single_testimonial_details">
                                <img className="rounded-circle mb-3" src={Testimonial2} alt={Testimonial2} />
                                <h5 className="h3-responsive mb-0">Eric Johnson</h5>
                                <h6 className="h6-responsive pb-3">App Developer</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single_testimonial border rounded hvr-float-shadow">
                            <p className="py-4 px-3"><q>We need to button up our approach it’s a simple lift and shift job and paddle on both sides, but today shall be a cloudy day at office.</q></p>
                            <hr/>
                            <div className="single_testimonial_details">
                                <img className="rounded-circle mb-3" src={Testimonial3} alt={Testimonial3} />
                                <h5 className="h3-responsive pb-3">Pat Metheny</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialArea;