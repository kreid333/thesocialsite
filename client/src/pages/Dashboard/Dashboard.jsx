import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div id="top-card" className="text-center">
        <FontAwesomeIcon icon={faUser} size="2x" className="mt-2"/>
        <p>Welcome, username!</p>
      </div>
    </div>
  );
};

export default Dashboard;
