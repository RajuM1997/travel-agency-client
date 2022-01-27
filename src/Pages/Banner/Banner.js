import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section">
      <Carousel className="p-0">
        <Carousel.Item interval={1000}>
          <div className="carousel-img">
            <img
              className="d-block img-fluid w-100"
              src="https://images.unsplash.com/photo-1573269354259-8c108692afa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="First slide"
            />
          </div>
          <Carousel.Caption className="w-75 d-flex flex-column justify-content-center align-content-center caption">
            <h1 className="text-white pb-1 text-uppercase">
              The river that flows over the falls
            </h1>
            <p className="sub_title">prehistoric caves that surround</p>
            <div className="btn">
              <button className="carousel-btn">See Details</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="carousel-img">
            <img
              className="d-block img-fluid  w-100"
              src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption className="w-75 d-flex flex-column justify-content-center align-content-center caption">
            <h1 className="text-white pb-1 text-uppercase">
              He small town of Livingstone is a great
            </h1>
            <p className="sub_title">Winding paths by bike</p>
            <div className="btn">
              <button className="carousel-btn">See Details</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="carousel-img">
            <img
              className="d-block img-fluid w-100"
              src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption className="w-75 d-flex flex-column justify-content-center align-content-center caption">
            <h1 className="text-white pb-1 text-uppercase">
              You are taking a trip to the “stone forest”
            </h1>
            <p className="sub_title">Expert explorers in the Greek woodland.</p>
            <div className="btn">
              <button className="carousel-btn">See Details</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-3 m-0 p-0">
            <div className="tore">
              <h5>Find Your</h5>
              <h1>Holiday</h1>
            </div>
          </div>
          <div className="col-md-6 m-0 p-0">
            <div className="form">
              <Form>
                <Row>
                  <Col>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
          <div className="col-md-3 m-0 p-0">
            <div className="form">
              <button>Search Here</button>
            </div>
          </div>
          <div className="col-md-3 search"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
