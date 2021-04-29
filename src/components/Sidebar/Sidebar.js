import React from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../../images/blog/newsletter1.png';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-12 newletter_area text-center">
                    <h4>Sign up for Newsletter</h4>
                    <p>Hottest articles on your inbox!</p>
                    <img className="mb-3" src={Newsletter} alt={Newsletter} />
                    <form action="">
                        <input className="c-input mb-2" type="text" name="nn" required="" placeholder="First Name" />
                        <input className="c-input mb-2" type="email" name="ne" required="" placeholder="Enter Email Address" />
                        <button className="btn w-100 text-white mb-2">Subscribe Now</button>
                    </form>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-12 popular_posts">
                    <h4 class="widget-title"><span>Popular Posts</span></h4>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-12 contact_details">
                    <h4 className="widget-title"><span>Contact Details</span></h4>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-2"><i className="fas fa-map-marker me-2"></i>221B Baker Street</li>
                        <li className="mb-2"><i className="fas fa-phone-alt me-2"></i>(372) 587-2335</li>
                        <li><i className="far fa-clock me-2"></i>11 a.m - 12 p.m</li>
                    </ul>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-12 get_social">
                    <h4 class="widget-title mb-2"><span>Get Social</span></h4>
                    <ul className="list-unstyled list-inline mb-0">
                        <li className="list-inline-item me-3"><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                        <li className="list-inline-item me-3"><Link to="/"><i class="fab fa-twitter"></i></Link></li>
                        <li className="list-inline-item me-3"><Link to="/"><i class="fab fa-behance"></i></Link></li>
                        <li className="list-inline-item me-3"><Link to="/"><i class="fab fa-instagram"></i></Link></li>
                        <li className="list-inline-item me-3"><Link to="/"><i class="fab fa-pinterest-p"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;