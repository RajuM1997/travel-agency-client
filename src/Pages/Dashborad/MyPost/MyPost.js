import React, { useState, useEffect } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";

const MyPost = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4500/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data.blogs));
  }, []);
  console.log(blogs);
  return (
    <div className="blog py-5">
      <Container>
        <div className="text-center">
          <i className="text-warning">
            <h6>Latest Blog Posts</h6>
          </i>
          <h1 className="text-center title pb-5">
            Our Latest Article <br /> For Travellers
          </h1>
        </div>
        <Row lg={3} xs={1} className="g-4">
          {blogs.map((blog) => (
            <Col>
              <CardGroup data-aos="fade-up">
                <Card className="card">
                  <Card.Img
                    variant="top"
                    className="card-image img-thumbnail"
                    src={blog?.img}
                  />
                  <Card.Body className="d-flex justify-content-between pt-3">
                    <div className="comment-icon">
                      <i className="far fa-clock"></i>
                      <span> {blog?.dataTime}</span>
                    </div>
                  </Card.Body>
                  <Card.Body className="py-1">
                    <Card.Title>TRIP ABOUT TO LEAVE</Card.Title>
                  </Card.Body>
                  <Card.Body className="py-0 description">
                    <Card.Text>Arthur: {blog?.name}</Card.Text>
                  </Card.Body>
                  <Card.Body className="py-0 description">
                    <Card.Text>{blog?.experience}</Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyPost;
