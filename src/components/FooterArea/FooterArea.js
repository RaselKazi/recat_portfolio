import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FooterHeightContext } from '../../App';
import Google from '../../images/googlePlay.svg';
import Apple from '../../images/appleStore.svg';
import './FooterArea.css';

const FooterArea = () => {
    const dWidth = window.innerWidth;
    const [height, setHeight] = useContext(FooterHeightContext);
    const ref = useRef(null);
  
    useEffect(() => {
      setHeight(ref.current.offsetHeight);
    });

    const mB = dWidth <= 767;

    const MarginBottom = {
        position: 'fixed',
    };

    const MarginBottomZero = {
        position: 'static',
    };
    return (
        <footer style={mB ? {MarginBottomZero} : MarginBottom} id="footer_area" ref={ref} >
            {/* <div className="footer_top">
                <hr className="mt-0" />
                <div className="container">
                    <div className="row py-4">
                        <div className="col-md-9 col-sm-6 col-xs-6">
                            <h6 className="h6-responsive m-0">Ready to revolutionize your website?</h6>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <button className="btn btn-light px-4 hvr-float-shadow">Learn More</button>
                        </div>
                    </div>
                </div>
                <hr className="mt-0"/>
            </div> */}
            <div className="footer_middle">
                <hr className="mt-0"/>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-6 col-6 mb-3">
                            <h6 className="text-secondary">Everipost</h6>
                            <ul className="list-unstyled">
                                <li><Link className="text-decoration-none" to="/">Home</Link></li>
                                <li><Link className="text-decoration-none" to="/press">Press</Link></li>
                                <li><Link className="text-decoration-none" to="/careers">Careers</Link></li>
                                <li><Link className="text-decoration-none" to="/contact">Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6 col-6 mb-3">
                            <h6 className="text-secondary">Resources</h6>
                            <ul className="list-unstyled">
                                <li><Link className="text-decoration-none" to="/blog">Blog</Link></li>
                                <li><Link className="text-decoration-none" to="/faq">FAQs</Link></li>
                                <li><Link className="text-decoration-none" to="/privacypolicy">Support</Link></li>
                            </ul>
                        </div>
                        {/* <div className="col-md-3 col-sm-6 col-xs-6 mb-3">
                            <h6 className="text-secondary">Legal</h6>
                            <ul className="list-unstyled">
                                <li><Link className="text-decoration-none" to="/terms">Terms</Link></li>
                                <li><Link className="text-decoration-none" to="/privacy">Privacy</Link></li>
                                <li><Link className="text-decoration-none" to="/guidelines">Guidelines</Link></li>
                            </ul>
                        </div> */}
                        <div className="col-md-3 col-sm-6 col-xs-6 col-6 social_menu mb-3">
                            <h6 className="text-secondary">Slide into our DMs</h6>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item me-4"><Link className="text-decoration-none" to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                {/* <li className="list-inline-item me-4"><Link className="text-decoration-none" to="/"><i className="fab fa-twitter"></i></Link></li>
                                <li className="list-inline-item me-4"><Link className="text-decoration-none" to="/"><i className="fab fa-pinterest-p"></i></Link></li> */}
                                <li className="list-inline-item me-4"><Link className="text-decoration-none" to="/"><i className="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6 col-6 mb-3">
                            <h6 className="text-secondary">Download the App</h6>
                            <div className="row">
                                <div className="col-md-6 col-sm-12 col-6">
                                   <Link to="/"><img className="img-fluid" src={Apple} alt={Apple}/></Link>
                                </div>
                                <div className="col-md-6 col-sm-12 col-6">
                                   <Link to="/"><img className="img-fluid" src={Google} alt={Google}/></Link>
                                </div>
                            </div>
                            {/* <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><Link to="/"><img className="img-fluid" src={Apple} alt={Apple}/></Link></li>
                                <li className="list-inline-item"><Link to="/"><img className="img-fluid" src={Google} alt={Google}/></Link></li>
                            </ul> */}
                            {/* <ul className="list-unstyled list-inline">
                                <li className="list-inline-item me-4"><Link className="text-decoration-none" to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                <li className="list-inline-item me-4"><Link className="text-decoration-none" to="/"><i className="fab fa-twitter"></i></Link></li>
                                <li className="list-inline-item me-4"><Link className="text-decoration-none" to="/"><i className="fab fa-pinterest-p"></i></Link></li>
                                <li className="list-inline-item me-4"><Link className="text-decoration-none" to="/"><i className="fab fa-instagram"></i></Link></li>
                            </ul> */}
                        </div>
                        {/* <div className="col-md-3 col-sm-6 col-xs-6">
                            <h6 className="text-secondary">Get Social</h6>
                            <form className="input-group" method="post">
                                <input className="form-control" type="email" name="ne" required="" placeholder="Enter Email Address" />
                                <button type="submit" className="tb-newsletter-submit"><i className="fa fa-paper-plane"></i></button>
                            </form>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="footer_bottom pb-5">
                <hr className="mt-0"/>
                <div className="container">
                    <div className="row pb-3">
                        <div className="col-md-6 col-sm-12 float-start">
                            <p className="p-responsive">@everipost 2020</p>
                        </div>
                        <div className="col-md-3 col-sm-12"></div>
                        <div className="col-md-3 col-sm-12">
                            {/* <p className="p-responsive">© Built with pride and caffeine. All rights reserved.</p> */}
                            <ul className="list-styled list-inline float-end">
                                {/* <li className="list-inline-item me-4"><li> */}
                                <li className="list-inline-item text-decoration-none"><Link className="text-decoration-none" to="/terms">Terms & conditions |</Link></li>
                                <li className="list-inline-item text-decoration-none"><Link className="text-decoration-none" to="/privacy">Privacy policy</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterArea;