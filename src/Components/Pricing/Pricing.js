import React from 'react'

const Pricing = () => {
    return (
        <div className="pricing container text-center my-5 py-5">
            <div className="pricing-header">
                <h2>Choose Your Dedicated Team</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mt-5">
                    <div className="pricing-card p-5">
                        <h3>$199</h3>
                        <p className="mt-2">For Basic</p>
                        <span class="divider"></span>
                        <ul  className="list-unstyled mt-3">
                            <li className="py-2">Homepage</li>
                            <li className="py-2">No Inner Page</li>
                            <li className="py-2">Asset file</li>
                            <li className="py-2">Source file</li>
                            <li className="py-2">Free Stock Photos</li>
                            <li className="py-2">10 Days Free Support</li>
                            <li className="py-2">24/7 Support</li>
                        </ul>
                        <a href="#" className="btn mt-3">Order Now</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-5">
                    <div className="pricing-card featured p-5">
                        <h3>$399</h3>
                        <p className="mt-2">For Preferred</p>
                        <span class="divider"></span>
                        <ul  className="list-unstyled mt-3">
                            <li className="py-2">Homepage</li>
                            <li className="py-2">4 Inner Page</li>
                            <li className="py-2">Asset file</li>
                            <li className="py-2">Source file</li>
                            <li className="py-2">Free Stock Photos</li>
                            <li className="py-2">20 Days Free Support</li>
                            <li className="py-2">24/7 Support</li>
                        </ul>
                        <a href="#" className="btn mt-3">Order Now</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-5">
                    <div className="pricing-card p-5">
                        <h3>$899</h3>
                        <p className="mt-2">For Elite</p>
                        <span class="divider"></span>
                        <ul  className="list-unstyled mt-3">
                            <li className="py-2">Homepage</li>
                            <li className="py-2">8 Inner Page</li>
                            <li className="py-2">Asset file</li>
                            <li className="py-2">Source file</li>
                            <li className="py-2">Free Stock Photos</li>
                            <li className="py-2">30 Days Free Support</li>
                            <li className="py-2">24/7 Support</li>
                        </ul>
                        <a href="#" className="btn mt-3">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
