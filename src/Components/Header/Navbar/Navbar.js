import React from 'react';
import './Navbar.css';
import logo from '../../../images/logo.png';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container">
                <a className="navbar-brand" to="/">
                    <img className="img-fluid logo" src={logo} alt="Logo"/>
                </a>
                <a className="navbar-toggler" to="/" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="#">Service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4" to="/dashboard">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="#">Event</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="#">Contact</a>
                    </li>
                    </ul>
                    <a href="#" className="btn">Login</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;