import React, { useContext } from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import { FooterHeightContext } from '../../App';
import './FaqTabArea.css';

const FaqTabArea = (props) => {
    const dWidth = window.innerWidth;
    console.log('Inner Width:', dWidth);
    const [height] = useContext(FooterHeightContext);
    const mB = dWidth <= 767;
    console.log(mB);

    const MarginBottom = {
        marginBottom: height,
    };

    const MarginBottomZero = {
        marginBottom: 0,
    };
    const tabArray = props.tabArray;
    return (
        <section className="brandsTab_area bg-white" style={mB ? MarginBottomZero : MarginBottom} >
            <div className="container">
                <div className="row py-5">
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
                                <AccordionItem className="mb-3" title={`${item.title}`} expanded={item === 1}>
                                <div className="mt-2 ms-2">
                                    <p className="mb-0 faqP">{item.body}</p>
                                    {
                                        item.body2 ? <p className="faqP">{item.body2}</p> : <p style={{display: 'none'}}></p>
                                    }
                                    
                                </div>
                                </AccordionItem>
                            );
                            })}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqTabArea;