import React from 'react'

const Pricing = () => {
    return (
        <div className="pricing container text-center my-5 py-5">
            <div className="pricing-header">
                <h2>Choose Your Dedicated Team</h2>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="pricing-card">
                        <h3>$199</h3>
                        <p className="my-3">For Basic</p>
                        <hr/>
                        <ul  className="list-unstyled">
                            <li className="py-2">Homepage</li>
                            <li className="py-2">No Inner Page</li>
                            <li className="py-2">Asset file</li>
                            <li className="py-2">Source file</li>
                            <li className="py-2">Free Stock Photos</li>
                            <li className="py-2">10 Days Free Support</li>
                            <li className="py-2">24/7 Support</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="pricing-card">
                        <h3>$399</h3>
                        <p className="my-3">For Preferred</p>
                        <hr/>
                        <ul  className="list-unstyled">
                            <li className="py-2">Homepage</li>
                            <li className="py-2">4 Inner Page</li>
                            <li className="py-2">Asset file</li>
                            <li className="py-2">Source file</li>
                            <li className="py-2">Free Stock Photos</li>
                            <li className="py-2">20 Days Free Support</li>
                            <li className="py-2">24/7 Support</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="pricing-card">
                        <h3>$899</h3>
                        <p className="my-3">For Elite</p>
                        <hr/>
                        <ul  className="list-unstyled">
                            <li className="py-2">Homepage</li>
                            <li className="py-2">8 Inner Page</li>
                            <li className="py-2">Asset file</li>
                            <li className="py-2">Source file</li>
                            <li className="py-2">Free Stock Photos</li>
                            <li className="py-2">30 Days Free Support</li>
                            <li className="py-2">24/7 Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
