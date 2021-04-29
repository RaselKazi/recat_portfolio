import React from 'react';
import './BrandsTabArea.css';
// import Slider from "react-slick";
import { Accordion, AccordionItem } from 'react-sanfona';
import Fade from 'react-reveal/Fade';


const BrandsTabArea = (props) => {
    const tabArray = props.tabArray;
    // const settings = {
    //   dots: false,
    //   arrows: false,
    //   autoplay:true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   autoplaySpeed: 2000,
    //   slidesToScroll: 1
    // };
    // const TabCarouselArray = [
    //     {
    //         img: Car1
    //     },
    //     {
    //         img: Car2
    //     },
    //     {
    //         img: Car3
    //     }
    // ]
    // const tabArray = [
    //     {
    //         title: 'How much time do you take to make the campaign live?',
    //         body: 'The faster the brand can approve the campaign brief, the shorter the time. In general, campaigns can go up within 1 or 2 days after signing of quotation.'
    //     },
    //     {
    //         title: 'Can Everipost ensure that the creators/influencers will not post before the content is approved?',
    //         body: 'While we cannot restrict what they post on their own social media accounts, the payout will only be given to the posts that are approved by the brands as they followed the campaign guidelines and fulfilled the requirements.'
    //     },
    //     {
    //         title: 'Is it possible to run a campaign for CSR?',
    //         body: 'Absolutely, yes. Connect with us today to find out more!'
    //     }
    // ]
    return (
        <section className="brandsTab_area bg-white" >
            <div className="container">
                <div className="row pt-5">
                    {/* <div className="col-md-6">
                        <div className="row">
                            <Slider {...settings}>
                            {
                                TabCarouselArray.map(car => (
                                    // <div className="col-md-12">
                                        
                                    // </div>
                                    <img className="w-75" src={car.img} alt={car.img} />
                                ))
                            }
                            </Slider>
                        </div>
                    </div> */}
                    <div className="col-md-12 pt-5 accordion_area">
                        <h2 className="h2-responsive mb-4">Frequently Asked Questions</h2>
                        <Accordion className="mb-5">
                            {tabArray.map(item => {
                            return (
                                <Fade bottom cascade>
                                    <AccordionItem className="mb-3" title={`${item.title}`} expanded={item === 1}>
                                    <div className="mt-2">
                                        <p className="mb-0">{item.body}</p>
                                        {
                                            item.body2 ? <p>{item.body2}</p> : <p style={{display: 'none'}}></p>
                                        }
                                        
                                    </div>
                                    </AccordionItem>
                                </Fade>
                            );
                            })}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandsTabArea;