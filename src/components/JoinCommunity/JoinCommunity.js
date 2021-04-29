import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FooterHeightContext } from '../../App';
import './JoinCommunity.css';

const JoinCommunity = () => {
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
    return (
        <section className="bg-white" style={mB ? MarginBottomZero : MarginBottom}>
            <hr className="my-0" />
            <div className="container py-5">
                <div className="row text-center py-4">
                    <div className="col-md-4 mb-3">
                        <div className="single_join_item border rounded hvr-float">
                              <div className="join_item_details p-5">
                                  <h6 className="h6-responsive" >Join the Community</h6>
                                  <p className="p-responsive mb-0">Bring to the table win-win survival way to ensure proactive domination.</p>
                              </div>
                              <hr className="my-0"/>
                              <div className="join_item_action bg-light py-3">
                                   <Link to="/contact" className="text-decoration-none text-secondary" target="_self">For Influencers</Link>
                              </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="single_join_item border rounded hvr-float">
                              <div className="join_item_details p-5">
                                  <h6 className="h6-responsive" >Email Us</h6>
                                  <p className="p-responsive mb-0">Bring to the table win-win survival way to ensure proactive domination.</p>
                              </div>
                              <hr className="my-0"/>
                              <div className="join_item_action bg-light py-3">
                                   <Link to="/contact" className="text-decoration-none text-secondary" target="_self">contact@everipost.com</Link>
                              </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="single_join_item border rounded hvr-float">
                              <div className="join_item_details p-5">
                                  <h6 className="h6-responsive" >Schedule a Call</h6>
                                  <p className="p-responsive mb-0">Bring to the table win-win survival way to ensure proactive domination.</p>
                              </div>
                              <hr className="my-0"/>
                              <div className="join_item_action bg-light py-3">
                                   <Link to="/contact" className="text-decoration-none text-secondary" target="_self">+001-45822475</Link>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinCommunity;<h1>Join Community</h1>