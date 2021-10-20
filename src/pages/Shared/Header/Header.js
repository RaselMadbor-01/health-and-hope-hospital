import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo/logo.png";
import "./Header.css";

const Header = () => {
  const { users, logOut } = useAuth();
  return (
    <div className="bg-light">
      <nav className="container-xl navbar navbar-expand-xl navbar-light">
        <div className="container-fluid">
        <div className="navbar-brand fw-bolder d-flex align-items-center text-info">
            <img src={logo} className="img-fluid sm-m-0" alt="" />
           <h1 className="logo-name"> Health And Hope Hospital</h1>
          </div>
          <button
            className="navbar-toggler sm-mx-auto md-me-auto "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/doctors">
                  Doctors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact us
                </NavLink>
              </li>
              <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
              {users.email ? (
                <ul className="navbar-nav ms-auto mb-lg-0">
                  <li className="nav-item">
                    <p className="mt-2">{users.displayName}</p>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn ms-1 text-white sign-out-btn"
                      onClick={logOut}
                    >
                      log Out
                    </button>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </ul>
            {/* {users.email?<div className="d-flex justify-content-center align-items-center login-info">
              <img src={users?.photoURL} className="user-img" alt="" />
              <button className="btn ms-1 text-white sign-out-btn" onClick={logOut}>log Out</button>
            </div>:""} */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
