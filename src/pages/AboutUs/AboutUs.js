import React from "react";
import building from "../../images/building/hospitalBuilding.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./AboutUs.css";

const AboutUs = () => {
  const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />;
  return (
    <div className="container">
      <div className="row py-3">
        <div className="col-md-6">
          <h2 className="text-info fw-bolder py-3">Health And Hope Hospital</h2>
          <h5 className="text-primary fw-bold pb-3">
            GET A WORLD CLASS HEALTH SERVICE
          </h5>
          <p className="lh-lg fs-6">
            HAHH has all the characteristics of a world-class hospital with wide
            range of services and specialists, equipments and technology,
            ambience and service quality. The hospital is a showcase of synergy
            of medical technology and advances in ICT Division through paperless
            medical records. The skilled nurses, technologists and
            administrators of Bangladesh Specialized Hospital, aided by
            state-of-the-art equipments, provide a congenial infrastructure for
            the medical professionals in providing healthcare of international
            standards.
          </p>
        </div>
        <div className="col-md-6">
          <img src={building} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row py-3">
        <div className="col-md-6">
         <div className=" text-primary me-3 ps-2 ">
         <h3 className="fw-bolder py-2">MISSION</h3>
          <p className="text-info ">WE ARE DEDICATED TO MEETING THE NEEDS OF:</p>
          <ul className="mision-part">
            <li>
              {arrowIcon} Our patient - excellent and cost-effective healthcare
            </li>
            <li>{arrowIcon} Our staff - continuing development and welfare</li>
            <li>
              {arrowIcon} Our nation - partnership in promoting health in
              Bangladesh.
            </li>
          </ul>
         </div>
        </div>
        <div className="col-md-6 col-md-6">
          <div className=" text-primary me-3 ps-2">
          <h3 className="mb-3">VISION</h3>
          <p className="rounded shadow vision-text">
            "TO BE A RENOWNED ORGANIZATION AT THE LEADING EDGE OF MEDICINE,
            PROVIDING QUALITY HEALTHCARE TO MEET OUR NATION'S ASPIRATIONS."
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
