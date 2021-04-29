import React from 'react';
import './HeroContact.css';
import Fade from 'react-reveal/Fade';

const HeroContact = (props) => {
    const title = props.title;
    return (
        <section className="hero_contact_area py-5">
            <div className="container">
                <div className="row text-center text-white">
                    <div className="col-md-2"></div>
                        <Fade cascade>
                            <div className="col-md-8 hero_contact_details">
                                <h1 className="h1-responsive">{title.title}</h1>
                                <p className="p-responsive">{title.subtitle}</p>
                            </div>
                        </Fade>
                    <div className="col-md-2"></div>
                </div>
            </div>
            <div className="overlay"></div>
        </section>
    );
};

export default HeroContact;