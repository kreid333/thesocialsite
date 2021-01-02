import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faCommentAlt,
  faSearch,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div id="nav-bar">
        <div id="top-card" className="text-center">
          <FontAwesomeIcon icon={faUser} size="2x" className="mt-2" />
          <p>Welcome, username!</p>
        </div>
        <div className="text-center">
          <span>
            <FontAwesomeIcon icon={faSearch} size="4x" className="fa-icon" />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faUserCircle}
              size="4x"
              className="fa-icon"
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faCommentAlt}
              size="4x"
              className="fa-icon"
            />
          </span>
          <span>
            <FontAwesomeIcon icon={faCog} size="4x" className="fa-icon" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
