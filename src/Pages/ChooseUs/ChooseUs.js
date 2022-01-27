import React from "react";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="main-text pb-5 text-center">
          <i>
            <h6 className="text-warning">Why Choose Us?</h6>
          </i>
          <h2 className="title">
            Every Time We Provide <br />
            Best Service
          </h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="left-side">
              <div className="left-img">
                <img
                  className="img-fluid w-100"
                  src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=843&q=80"
                  alt="travel-man"
                />
                <div className="play-icon">
                  <i className="far fa-play-circle"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row pt-3">
              <div className="col-md-6">
                <div className="chooes">
                  <div className="icon">
                    <i className="fas fa-user-secret"></i>
                  </div>
                  <div className="text">
                    <h4>World Class Service</h4>
                    <p>Get a great night’s sleep by discovering the finest</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="chooes">
                  <div className="icon">
                    <i className="fas fa-award"></i>
                  </div>
                  <div className="text">
                    <h4>Best Travel Guide</h4>
                    <p>
                      Find your wings with our choice of the best sites to book
                      flights
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-6">
                <div className="chooes">
                  <div className="icon">
                    <i class="fas fa-globe-asia"></i>
                  </div>
                  <div className="text">
                    <h4>Best travel World</h4>
                    <p>
                      Give your feet a break and book the car of your dreams and
                      true
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="chooes">
                  <div className="icon">
                    <i className="far fa-handshake"></i>
                  </div>
                  <div className="text">
                    <h4>24/7 Support</h4>
                    <p>
                      ake the plunge and find your ideal holiday on the seas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
