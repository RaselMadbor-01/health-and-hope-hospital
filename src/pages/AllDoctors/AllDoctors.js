import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const AllDoctors = () => {
    const [allDoctors, setAllDoctors] = useState([]);
  useEffect(() => {
    fetch("./fakeDoctors.json")
      .then((res) => res.json())
      .then((data) => setAllDoctors(data));
  }, []);
    return (
        <div className="container py-5">
      <h1 className="text-center text-info py-5">All Our Doctors</h1>
      <div className="row row-cols-1 row-cols-md-3 g-5">
        {allDoctors.map((Dc) => (
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
    </div>
    );
};

export default AllDoctors;