import React from 'react';
import logo from "../../../images/logo/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faMobileAlt,faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

const Footer = () => {
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />
    const phoneIcon = <FontAwesomeIcon icon={faMobileAlt} />
    const addressIcon = <FontAwesomeIcon icon={faMapMarkedAlt} />
    return (
        <div className="row bg-info p-5 m-0">
            <div className="row">
                <div className="col-lg-4 col-md-3 text-light">
                    <div className="d-flex align-items-center pb-3 ">
                    <img src={logo} alt="" />
                    <h4 className="ms-1">Health And Hope Hospital</h4>
                    </div>
                    <p className="lh-lg">Health And Hope Hospital Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.</p>
                    <h3>[ Hotline= 10660 ]</h3>
                </div>
                <div className="col-lg-2 col-md-3">
                    <p className="fw-bolder fs-3 text-light">Ouick Link</p>
                    <ul className="footer-links">
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Our Doctors</li>
                        <li>Contact us</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3">
                    <p className="fw-bolder fs-3 text-light">Ouick Services</p>
                    <ul className="footer-links">
                        <li>Cardiology</li>
                        <li>Urology</li>
                        <li>Oncology</li>
                        <li>Neonatology</li>
                        <li>Nephrology</li>
                        <li>Hepatology</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3 text-light">
                    <h4>Contact Us</h4>
                    <div className="d-flex">
                        <span className="fs-2 text-light pe-3">{emailIcon}</span>
                        <p>info@hope.com <br />
                        hello@hope.com</p>
                    </div>
                    <div className="d-flex">
                        <span className="fs-2 text-light pe-3">{phoneIcon}</span>
                        <p>call:+07 554 332 322<br />
                        call:+236 256 256 356</p>
                    </div>
                    <div className="d-flex">
                        <span className="fs-2 text-light pe-3">{addressIcon}</span>
                        <p>09 Road, E-block ,Lalmatia-Dhaka-1207</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;