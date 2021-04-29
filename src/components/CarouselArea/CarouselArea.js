import React from 'react';
import Slider from "react-slick";
import Slider1 from '../../images/home/slider1.png';
import Slider2 from '../../images/home/slider2.png';
import Slider3 from '../../images/home/slider3.png';
import Slider4 from '../../images/home/slider4.png';
import Slider5 from '../../images/home/slider5.png';
import Slider6 from '../../images/home/slider6.png';
import Slider7 from '../../images/home/slider7.png';
import './CarouselArea.css';

const CarouselArea = () => {
    const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      arrows: false,
      slidesToScroll: 1
    };
    const sliderArray = [
        {
            id: 1,
            img: Slider1
        },
        {
            id: 2,
            img: Slider2
        },
        {
            id: 3,
            img: Slider3
        },
        {
            id: 4,
            img: Slider4
        },
        {
            id: 5,
            img: Slider5
        },
        {
            id: 6,
            img: Slider6
        },
        {
            id: 7,
            img: Slider7
        }
    ]
    return (
        <section className="carousel_area bg-white">
            <hr className="my-0" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row py-4">
                            <div className="col-md-12">
                                <Slider {...settings}>
                                    {
                                        sliderArray.map(slide => (
                                            <div key={slide.id} className="col-md-3 col-sm-6">
                                                <div className="single_slider p-2 d-flex justify-content-center">
                                                    <img className="me-2" src={slide.img} alt={slide.img} />
                                                </div>
                                            </div>
                                            ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-0" />
        </section>
    );
};

export default CarouselArea;