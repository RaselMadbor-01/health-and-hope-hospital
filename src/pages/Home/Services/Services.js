import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./fakeServices.json")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0,8)));
  }, []);
  return (
    <div className="container text-center services-section pb-5">
      <h1 className="pb-5 text-info service-header">Our Hospital Services</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
        {services.map((element) => (
          <div key={element.id}>
            <div className="col">
              <div className="card h-100 services-card">
                <img src={element.image} className="img-fluid services-img" alt="..." />
                <div className="card-body p-0 p-2">
                  <h5 className="card-title services-name">{element.name}</h5>
                  <p className="card-text services-text">{element.details.slice(0,40)}...</p>
                  <button className="btn btn-light d-none services-btn"><NavLink to={`/services/${element.id}`}>More Details</NavLink></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
