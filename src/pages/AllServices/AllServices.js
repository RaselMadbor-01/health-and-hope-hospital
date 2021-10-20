import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./AllServices.css";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("./fakeServices.json")
      .then((res) => res.json())
      .then((result) => setAllServices(result));
  }, []);

  return (
    <div>
      <div className="container text-center py-5">
        <h1 className="pb-5 text-info">All Our Services</h1>
        <div className="row row-cols-1 row-cols-md-3 g-5 m-0">
          {allServices.map((element) => (
            <div key={element.id}>
              <div className="col">
                <div className="card h-100 px-2">
                  <img
                    src={element.image}
                    className="img-fluid w-50 mx-auto py-4 "
                    alt="..."
                  />
                  <div className="card-body p-0 p-2">
                    <h5 className="card-title" style={{height:"40px"}}>{element.name}</h5>
                    <p className="card-text">
                      {element.details.slice(0, 150)}...
                    </p>
                    <button className="btn btn-info all-services">
                      <NavLink style={{color:"#fff"}} to={`/services/${element.id}`}>
                        More Details
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
