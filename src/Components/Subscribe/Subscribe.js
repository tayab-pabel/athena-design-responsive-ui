import React from 'react';
import './Subscribe.css';

const componentName = () => {
    return (
        <div className="subscribe container text-center mb-5">
            <h2>Get your design right, right now</h2>
            <p>Be the first know our latest offers and updates!</p>
            <div className="subscribe-field row mt-5 d-flex align-items-center justify-content-center">
                <div className="col-md-8 col-6 pl-5">
                    <input type="email" class="form-control border-0 shadow-none" placeholder="Enter your email address"></input>
                </div>
                <div className="col-md-4 col-6">
                    <button className="btn">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default componentName;