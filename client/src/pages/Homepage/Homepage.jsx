import React from "react";
import "./Homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6" id="left">
          <div className="ml-3" id="left-content">
            <div className="row mb-5">
              <div className="col-xs-3">
                <FontAwesomeIcon icon={faUserPlus} size="4x" />
              </div>
              <div className="col-xs-9">
                <h2 className="ml-3">Connect with others</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-3">
                <FontAwesomeIcon icon={faUsers} size="4x" />
              </div>
              <div className="col-xs-9">
                <h2 className="ml-3">Engage in conversations</h2>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-xs-3">
                <FontAwesomeIcon icon={faGlobe} size="4x" />
              </div>
              <div className="col-xs-9">
                <h2 className="ml-3">
                  See what's happening <br /> around the world
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6" id="right">
          right side
        </div>
      </div>
    </div>
  );
};

export default Homepage;
