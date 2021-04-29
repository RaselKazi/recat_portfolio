import React from 'react';
import { Link } from 'react-router-dom';
import './HeroBlog.css';

const HeroBlog = () => {
    return (
        <section className="hero_blog_area bg-white">
            <div className="container">
                <div className="row text-white">
                    <div className="col-md-12">
                        <div className="blog_page_heading">
                            <h3>Blog</h3>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><Link className="text-decoration-none text-white" to="/">Home</Link> /</li>
                                <li className="list-inline-item"><Link className="text-decoration-none text-white" to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </section>
    );
};

export default HeroBlog;