import React from 'react';
import './ChartImage.css';
import Fade from 'react-reveal/Fade';

const ChartImage = (props) => {
    return (
        <section className="chart_image_area border-top border-bottom bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 chart_image_details">
                        <h2 className="mt-4 mb-3">With Everipost, you can</h2>
                        <ul className="list-unstyled">
                            <li className="my-2"><span className="material-icons">check_circle</span> Get personalised market for your brand- Finding the right audience that fits your brand image - Nano,Micro, Macro & Mega Infuencers, age, interest, etc.</li>
                            <li className="my-2"><span className="material-icons">check_circle</span> Utilize people's brand value to enhance products brand value</li>
                            <li className="my-2"><span className="material-icons">check_circle</span> Control the content your audience sees</li>
                            <li className="my-2"><span className="material-icons">check_circle</span> Keep your brand safe with genuine profiles.</li>
                        </ul>
                        {/* <button type="button" className="btn text-white me-4 my-2 py-2 px-4 hvr-float-shadow">Get A Free Consultation</button>
                        <button type="button" className="btn light_button my-2 py-2 px-4">Learn More</button> */}
                    </div>
                    <div className="col-md-6 pe-5">
                        <Fade right>
                            <img className="img-fluid float-right" src={props.img} alt={props.img}/>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChartImage;
