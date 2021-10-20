import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faEnvelope,
  faPhoneAlt,
  faClock,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import "./ContactUs.css";

const ContactUs = () => {
  const branchIcon = <FontAwesomeIcon icon={faBuilding} />;
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />;
  const scheduleIcon = <FontAwesomeIcon icon={faClock} />;
  const sendIcon = <FontAwesomeIcon icon={faLocationArrow} />;
  const handleSubmit=(e)=>{
      e.preventDefault();
      alert("Thank your for sending use message.")
  }
  
 
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-7">
        <h1 className="text-primary py-3">Get in Touch</h1>
          <form onSubmit={handleSubmit} >
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="3+4 ?"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                required
                id="flexCheckDefault"
              />
              <label
                className="form-check-label pb-2 text-info"
                htmlFor="flexCheckDefault"
              >
                I agree with the Terms of Use and Privacy Policy
              </label>
            </div>
            <div className="mb-3">
              <input
                type="submit"
                className="form-control bg-info text-white"
                id="exampleFormControlInput1"
                value="SEND MESSAGE"

              />
            </div>
          </form>
        </div>
        <div className="col-md-5 pt-4">
          <div className="d-flex align-items-start justify-content-start text-info rounded shadow mb-3">
            <span className="fs-1 px-2 rounded-pill mx-2 mt-2 bg-info text-white  ">{branchIcon}</span>
            <div>
              <h3>Our Branches</h3>
              <p>
                House # 1,Block # F, Banani,Dhaka- 1213
                <br />
                House # 45,Block # A, Mohammadpur,Dhaka- 1207
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start justify-content-start text-info rounded shadow mb-3"> 
            <span className="fs-1 px-2 rounded-pill mx-2 mt-2 bg-info text-white  ">{emailIcon}</span>
            <div>
              <h3>Email Address</h3>
              <p>
                health - health@ hospital.com <br />
                hope - hope@ hospital.com
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start justify-content-start text-info rounded shadow mb-3">
            <span className="fs-1 px-2 rounded-pill mx-2 mt-2 bg-info text-white  ">{phoneIcon}</span>
            <div>
              <h3>Call Center</h3>
              <p>
                health - 51 01 000 0000 <br />
                hope -51 21 000 0000
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start justify-content-start text-info rounded shadow mb-3">
            <span className="fs-1 px-2 rounded-pill mx-2  mt-2 bg-info text-white  ">{scheduleIcon}</span>
            <div>
              <h3>Our schedule</h3>
              <p>
                health - Mon to Sat - 08 to 19 <br />
                hope - Mon to Sat - 08 to 19
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
