import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="row">
                    <div className="col-md-4">
                        <h2 className="mt-5">Flying <span className="footer-logo">Zone</span></h2>
                    </div>



                    <div className="col-md-4">
                        <h4 className="fs-3 mt-3">Contact Us</h4>
                        <p>1699 East west road,Suite 300</p>
                        <p>Phone:+667833221</p>
                        <p>flyingzone@gmail.com</p>
                    </div>


                    <div className="col-md-4">
                        <h4 className="mt-3 fs-3">Follow us</h4>
                        <i className="fab fa-facebook icon-facebook"></i>
                        <i className="fab fa-instagram icon-instagram"></i>
                        <i className="fab fa-twitter icon-twitter"></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;