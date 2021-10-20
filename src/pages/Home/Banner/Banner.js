import React from "react";
import { NavLink } from "react-router-dom";
import photo1 from "../../../images/background/photo1.png";
import photo2 from "../../../images/background/photo2.png";
import photo3 from "../../../images/background/photo3.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={photo1} className="d-block w-100 banner-img" height="580" alt="..." />
            <div className="carousel-caption d-md-block">
              <h1 className="fs-1 fw-bold mb-4">Caring Health is Important Than All</h1>
              <p className="sm-lg-sm md-lh-lg fs-5 pb-2">
              Health And Hope Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.
              </p>
              <div>
              <button className="text-white fw-bolder me-2 banner-button"><NavLink to="/appointment">Get Appointment</NavLink></button>
              <button className="btn btn-outline-info text-white fw-bolder mb-1 learn-btn"><NavLink to="/about">Learn More</NavLink></button>
              </div>
            </div>
          </div>
         <div className="carousel-item">
            <img src={photo2} className="d-block w-100 banner-img" height="580" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h1 className="fs-1 fw-bold mb-4">Exceptinal Health Care for Woman</h1>
              <p className="sm-lg-sm md-lh-lglh-lg fs-5 pb-2">
              The hospital is a showcase of synergy of medical technology and advances in ICT Division through paperless medical records. The skilled nurses, technologists and administrators of Health And Hope Hospital.
              </p>
              <div>
              <button className="text-white fw-bolder me-2 banner-button"><NavLink to="/appointment">Get Appointment</NavLink></button>
              <button className="btn btn-outline-info text-white fw-bolder mb-1 learn-btn"><NavLink to="/about">Learn More</NavLink></button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={photo3} className="d-block w-100 banner-img" height="580" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h1 className="fs-1 fw-bold mb-4">We Offer Highly Treatments Children</h1>
              <p className="sm-lg-sm md-lh-lglh-lg fs-5 pb-2">
              To be a renowned organization at the leading edge of Medicine, providing quality healthcare to meet our nation's aspirations.
              </p>
              <div>
              <button className="text-white fw-bolder me-2 banner-button"><NavLink to="/appointment">Get Appointment</NavLink></button>
              <button className="btn btn-outline-info text-white fw-bolder mb-1 learn-btn"><NavLink to="/about">Learn More</NavLink></button>
              </div>
            </div>
          </div> 
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
