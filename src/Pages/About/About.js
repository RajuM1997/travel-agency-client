import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <i className="text-warning">
              <h6>About TravelBea</h6>
            </i>
            <h1 className="title">
              World Best Travel <br /> Agency Company <br /> Since 2008.
            </h1>
            <p>
              Operating out of TravelBea, ColorWhistle is your premier choice
              for online services. We provide a wide variety of digital services
              including web design, branding, digital marketing and much more.
              Our team has a wide range of skills and expertise and we always
              put our clients’ satisfaction first. This is what sets us apart
              from the competition – an eye for detail and the best service from
              the start to the completion of your project. Quite simply, we
              offer the most reliable and effective services to any company
              looking for a whole host of online solutions.
            </p>
          </div>
          <div className="col-md-6">
            <div className="about-img">
              <img
                src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="img-fluid"
                alt="about_image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
