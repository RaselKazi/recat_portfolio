import React from 'react';
import './HomeReleventData.css';
import ReleventData from '../../images/home/releventdata.png';
import Fade from 'react-reveal/Fade';

const HomeReleventData = () => {
    return (
        <section className="image_comparission_area border-bottom bg-white">
            <hr className="mt-0"/>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6">
                        <Fade left cascade>
                            <img className="w-100" src={ReleventData} alt={ReleventData} />
                        </Fade>
                    </div>
                    <div className="col-md-6 image_comparission_details ps-5 py-4">
                        <h2 className="mt-4 mb-3">Brands & Agencies</h2>
                        <ul className="list-unstyled">
                            <li className="my-2"><span className="material-icons">check_circle</span> Experience the power of People’s marketing- New paradigm of marketing, giving power to people and mouth of the word marketing</li>
                            <li className="my-2"><span className="material-icons">check_circle</span> Powerful dashboard- Al algorithms along with Machine learning</li>
                            <li className="my-2"><span className="material-icons">check_circle</span> Driven by Industry 4.0 Technologies and Internet 2.0</li>
                        </ul>
                        <button type="button" className="btn text-white me-4 my-2 py-2 px-4 hvr-float-shadow">Get A Free Consultation</button>
                        <button type="button" className="btn light_button my-2 py-2 px-4">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HomeReleventData;