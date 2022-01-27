import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="container ">
        <div className="notfound mx-auto">
          <img
            src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg"
            alt=""
          />
          <Link to="/">back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
