import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="web-details">
              <h4 className="pb-1">About Us</h4>
              <small>
                Uaques Drinking water gives five steps of water purification.
                Promising quality and ensuring the latest technology and serving
                the water with labelled bottles with trust and honesty.
              </small>
            </div>
          </div>
          <div className="col-md-2">
            <div className="about-us">
              <h4 className="pb-1">Company</h4>
              <div className="delais">
                <h6>About Us</h6>
                <h6>Careers</h6>
                <h6>How We Work</h6>
                <h6>Press Release</h6>
                <h6>Work With Us</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="business-details">
              <h4 className="pb-3">Business Hours</h4>
              <h6>Monday-Friday: 9am to 5pm</h6>
              <h6>Saturday: 10am to 4pm</h6>
              <h6>Sunday: Closed</h6>
            </div>
          </div>
          <div className="col-md-3">
            <div className="contact-us">
              <h4 className="pb-1">Contact us</h4>
              <h6>3065 Upton Avenue, Guilford Maine 04443 USA</h6>
              <h6>Call Us +1 207-876-1059</h6>
              <h6>E-mail: info@example.com</h6>
            </div>
          </div>
        </div>
        <div className="copy-right text-center text-white pt-3">
          <small>Copyrights © 2021 Raju. All rights reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
