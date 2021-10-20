import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("./fakeDoctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data.slice(3,6)));
  }, []);
  return (
    <div className="container py-5">
      <h1 className="text-center text-info py-5">Our Doctors</h1>
      <div className="row row-cols-1 row-cols-md-3 g-5">
        {doctors.map((Dc) => (
          <div key={Dc.id}>
            <div className="col">
              <div className="card h-100 bg-info rounded shadow-lg text-center doctor-section">
                <img src={Dc.image} className="img-fluid pt-3" alt="..." />
                <button className="doctors-btn"><NavLink to="/appointment">Get Appointment</NavLink></button>
                    
                <div className="card-footer text-white">
                <h5 className="card-title">Dr.{Dc.name}</h5>
                  <p className="card-text">
                    {Dc.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center m-5">
      <p className="fs-3 fw-bold doctors-detials"><NavLink to="/doctors">See More ...</NavLink></p>
      </div>
    </div>
  );
};

export default Doctors;
