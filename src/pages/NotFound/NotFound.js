import React from 'react';
import notFound from "../../images/notFound/rsz_11notfound.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import "./NotFound.css";

const NotFound = () => {
    const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />;
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            
            <img src={notFound} className="img-fluid mx-auto" alt="" />
            <h3 className="fw-bolder" style={{color:"#bf39b8"}}>Page Not Found</h3>
            <button className="btn not-found-btn my-4">{arrowIcon} Back To Home</button>
        </div>
    );
};

export default NotFound;