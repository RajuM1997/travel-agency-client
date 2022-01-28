import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TourPackage.css";

const TourPackage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://eerie-demon-56840.herokuapp.com/package")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);
  //console.log("")
  return (
    <div className="package">
      <Container className="py-5">
        <div className="text-center title pb-5">
          <i className="text-warning">
            <h6>Around the World</h6>
          </i>
          <h1>BEST SELLING TOURS</h1>
        </div>
        <Row lg={3} xs={1} className="g-4">
          {!loading ? (
            items.map((items) => (
              <Col key={items._id}>
                <CardGroup className="cardGroup" data-aos="fade-up">
                  <Card className="card">
                    <Card.Img
                      variant="top"
                      className="card-image img-thumbnail"
                      src={items.image}
                    />
                    <Card.Body>
                      <Card.Title>{items.title}</Card.Title>
                    </Card.Body>
                    <Card.Body className="py-0 description">
                      <Card.Title>{items.description.slice(0, 90)}</Card.Title>
                    </Card.Body>
                    <Card.Body>
                      <Card.Body className="d-flex justify-content-between py-1">
                        <div className="pack-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="reviw-text">
                          <p>{items?.reviw}</p>
                        </div>
                      </Card.Body>
                    </Card.Body>
                    <Card.Body className="py-1 d-flex justify-content-between">
                      <Card.Title>{items.duration}</Card.Title>
                      <Card.Title>
                        Price: <span className="price">${items.price}</span>
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer className="card-footer mx-auto">
                      <Link to={`/orderPlace/${items._id}`}>
                        <button className="get-package">Get Package</button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </Col>
            ))
          ) : (
            <div className="spiner mx-auto">
              <Spinner
                className="text-center"
                animation="border"
                variant="danger"
              />
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default TourPackage;
