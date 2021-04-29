import React from 'react';
import TestimonialBg from '../../images/home/testimonial-bg.jpg';
import Client1 from '../../images/home/client1.png';
import Client2 from '../../images/home/client2.png';
import './HomePeopleSaying.css';
import Slider from "react-slick";

const HomePeopleSaying = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const sliderArray =[
        {
            quote: 'Marketing is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Webify streamlines collaboration between designers and developers.',
            name: 'Marissa Rose Mayer',
            position: 'Investment Banker',
            img: Client1
        },
        {
            quote: 'Marketing is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Webify streamlines collaboration between designers and developers.',
            name: 'Sarah Jessica Parker',
            position: 'Chef Technical Officer',
            img: Client2
        }
    ]
    return (
        <section className="people_saying_area bg-white">
            <div className="container py-5">
                <div className="row text-center pt-5 mb-2">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="people_saying-details">
                            <h2 className="h2-responsive">What people are saying</h2>
                            <p>Fitst see how your businesses are performing.<br/>Then do more with insights from Webify team.</p>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-5">
                        <div className="row testi_slider">
                            <Slider {...settings}>
                                {
                                    sliderArray.map(slide => (
                                        <div className="col-md-12 my-4">
                                            <div className="single_testimonial bg-white border rounded p-5 my-5">
                                                <div className="testimonial_icon">
                                                    <i className="fas fa-quote-right"></i>
                                                </div>
                                                <div className="testimonial_details text-center">
                                                    <p>{slide.quote}</p>
                                                </div>
                                                <div className="testimonial_meta d-flex justify-content-center">
                                                    <img className="me-3 img-fluid" src={slide.img} alt={slide.img}/>
                                                    <div className="testimonial_client_information float-left">
                                                        <h6 className="h6-responsive mb-0">{slide.name}</h6>
                                                        <p className="p-responsive">{slide.position}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                    </Slider>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <img className="h-100" src={TestimonialBg} alt={TestimonialBg} />
                    </div>
                </div>
            </div>
            <hr className="mb-0"/>
        </section>
    );
};

export default HomePeopleSaying;