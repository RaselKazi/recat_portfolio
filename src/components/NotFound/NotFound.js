import React, { useContext } from 'react';
import { FooterHeightContext } from '../../App';
import FooterArea from '../FooterArea/FooterArea';
import Navbar from '../Navbar/Navbar';
import './NotFound.css';

const NotFound = () => {
    const dWidth = window.innerWidth;
    const [height] = useContext(FooterHeightContext);
    const mB = dWidth <= 767;

    const MarginBottom = {
        marginBottom: height,
    };

    const MarginBottomZero = {
        marginBottom: 0,
    };
    return (
        <div>
            <Navbar />
            <section className="not_found_area bg-white" style={mB ? {MarginBottomZero} : MarginBottom}>
                <hr className="mt-0"/>
                <div className="container py-5">
                    <div className="row py-5 text-center">
                        <div className="col-md-12 text-black py-5">
                            <h1 className="h1-responsive">Page Not Found</h1>
                            <h3 className="h3-responsive">404</h3>
                        </div>
                    </div>
                </div>
            </section>
            <FooterArea />
        </div>
    );
};

export default NotFound;