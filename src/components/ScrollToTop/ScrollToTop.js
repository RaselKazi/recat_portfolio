import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const ScrollToTop = () => {
    function Totop() {
        var Scroll = require('react-scroll');
        var scroll = Scroll.animateScroll;

        scroll.scrollToTop({
            to: 'section1',
            spy: true,
            smooth: true,
            hashSpy: true,
            offset: 50,
            duration: 500,
            delay: 0
        });
    }
    return (
        <div>
            <Link onClick={Totop} className="scrollToTop text-decoration-none" to="#section1"><i className="fas fa-angle-up"></i></Link>
        </div>
    );
};

export default ScrollToTop;