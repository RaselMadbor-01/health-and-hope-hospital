import React, { useEffect, useState } from "react";
import "./Appointment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhoneAlt,
  faEnvelope,
  faCalendarAlt,
  faClock,
  faCalendarPlus,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const Appointment = () => {
  const userIcon = <FontAwesomeIcon icon={faUser} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />;
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const serviceIcon = <FontAwesomeIcon icon={faCalendarPlus} />;
  const dateIcon = <FontAwesomeIcon icon={faCalendarAlt} />;
  const timeIcon = <FontAwesomeIcon icon={faClock} />;
  const doctorIcon = <FontAwesomeIcon icon={faUserMd} />;
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("./fakeServices.json")
      .then((res) => res.json())
      .then((result) => setAllServices(result));
  }, []);
  const [allDoctors, setAllDoctors] = useState([]);
  useEffect(() => {
    fetch("./fakeDoctors.json")
      .then((res) => res.json())
      .then((data) => setAllDoctors(data));
  }, []);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Your Appointment was accepted.We will inform your as soon as possible"
    );
    history.push("/home");
  };

  return (
    <div className="appointment-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="bg-light my-4 p-3">
              <h1 className="text-center bg-info text-white py-4">
                Book An Appointment
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    {serviceIcon}
                  </span>
                  <select
                    className="form-select"
                    aria-label="Disabled select example"
                  >
                    {allServices.map((el) => (
                      <option key={el.id} value={el?.id}>
                        {el?.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    {userIcon}
                  </span>
                  <input
                    type="text"
                    className="form-control m-0"
                    placeholder="Name"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    {emailIcon}
                  </span>
                  <input
                    type="email"
                    className="form-control m-0"
                    placeholder="Email"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>
                <div className="d-flex">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      {phoneIcon}
                    </span>
                    <input
                      type="number"
                      className="form-control m-0  me-2"
                      placeholder="Your phone"
                      aria-label="phone"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      {doctorIcon}
                    </span>
                    <select
                      className="form-select"
                      aria-label="Disabled select example"
                    >
                      {allDoctors.map((el) => (
                        <option key={el.id} value={el?.id}>
                          {el?.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      {dateIcon}
                    </span>
                    <input
                      type="date"
                      className="form-control m-0 me-2"
                      placeholder="Date"
                      aria-label="date"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      {timeIcon}
                    </span>
                    <select
                      className="form-select"
                      aria-label="Disabled select example"
                      required
                    >
                      <option defaultValue>Select Time Slot</option>
                      <option value="1">Morning Slot</option>
                      <option value="2">Evening Slot</option>
                      <option value="3">Night Slot</option>
                    </select>
                  </div>
                </div>
                <div className="input-group mb-3 ">
                  <input
                    type="submit"
                    className="form-control bg-info text-white"
                    value="Submit"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
