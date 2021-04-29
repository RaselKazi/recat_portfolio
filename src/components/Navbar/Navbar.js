import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="nav_area py-1 bg-white">
            <nav className="navbar fixed-top navbar-expand-lg navbar-expand-md navbar-light bg-white">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="w-50" src={Logo} alt={Logo}/>
                    </Link>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <NavLink className="nav-link" aria-current="page" to="/" style={{fontColor: 'black'}}>Home</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link" to="/brandsandagencies">Brands & Agencies</NavLink>
                            </li>
                            {/* <li className="nav-item dropdown me-3">
                                <NavLink className="nav-link" to="/howitworks">How It Works</NavLink>
                            </li> */}
                            <li className="nav-item me-3">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link" to="/faq">FAQ</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn border px-4 py-2 rounded-pill hvr-grow-shadow" type="submit">Download The App</button>
                        </form>
                    </div>
                </div>
                {/* <hr className="my-0"/> */}
            </nav>
        </header>
    );
};

export default Navbar;