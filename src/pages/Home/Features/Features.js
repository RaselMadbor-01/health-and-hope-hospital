import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProcedures,faUsers,faUserMd,faAward } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import "./Features.css";

const Features = () => {
    
const bedIcon = <FontAwesomeIcon icon={faProcedures} />
const patientIcon = <FontAwesomeIcon icon={faUsers} />
const doctorIcon = <FontAwesomeIcon icon={faUserMd} />
const experienceIcon = <FontAwesomeIcon icon={faAward} />

    return (
        <div className="container-md text-white text-center feature-section">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 p-0">
                   <div className=" border border-end-white p-3 feature-element">
                   <span className="font-icons">{bedIcon}</span>
                    <h2>
                        <CountUp 
                    start={0}
                    end={900}
                    duration={1.5} />
                    </h2>
                    <h4>Patients Beds</h4>
                   </div>
                </div>
                <div className=" col-lg-3 col-md-4  col-sm-6 p-0">
                <div className=" border border-end-white p-3 feature-element">
                <span className="font-icons">{patientIcon}</span>
                    <h2><CountUp 
                    start={0}
                    end={25000}
                    duration={1.5} />+</h2>
                    <h4>Happy Patients</h4>
                </div>
                </div>
                <div className=" col-lg-3 col-md-4 col-sm-6 p-0">
                <div className=" border border-end-white p-3 feature-element">
                <span className="font-icons">{doctorIcon}</span>
                    <h2><CountUp 
                    start={0}
                    end={650}
                    duration={1.5} /></h2>
                    <h4>Doctors & Nurse</h4>
                </div>
                </div>
                <div className="col-lg-3  col-md-4 col-sm-6 p-0">
               <div className=" border border-end-white p-3 feature-element">
               <span className="font-icons">{experienceIcon}</span>
                    <h2><CountUp 
                    start={0}
                    end={18}
                    duration={1.5} /></h2>
                    <h4>Year Experience</h4>
               </div>
                </div>
            </div>
            
        </div>
    );
};

export default Features;