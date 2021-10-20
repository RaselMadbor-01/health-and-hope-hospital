import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [servicesDetail, setServicesDetail] = useState([]);
  useEffect(() => {
    fetch("/fakeServices.json")
      .then((res) => res.json())
      .then((data) => {
        setServicesDetail(data);
        console.log(data);
      });
  }, []);
  const fullDetals = servicesDetail.find((el) => el.id == serviceId);
  console.log(fullDetals);

  return (
    <div className="container">
      <div className="card mb-3 mx-auto p-3 m-5 shadow-lg" style={{maxWidth: "600px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={fullDetals?.image} className="img-fluid rounded-start h-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fw-bold">{fullDetals?.name}</h5>
              <p className="card-text">
                {fullDetals?.details}
              </p>
              <p className="card-text">
                <button className="btn btn-info link-btn"><NavLink to="/appointment">Get Appointment</NavLink></button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
