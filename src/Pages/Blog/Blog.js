import React, { useState, useEffect } from "react";
import { Card, CardGroup, Col, Container, Row, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const size = 10;
  useEffect(() => {
    fetch(`http://localhost:4500/blog?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
        setLoading(false);
      });
  }, [page]);
  // console.log(blogs);
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
          {!loading ? (
            blogs.map((blog) => (
              <div>
                {blog.status === "approve" && (
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
                          <Card.Text>{blog?.expense.slice(0, 100)}</Card.Text>
                        </Card.Body>
                        <Card.Body className="py-1">
                          <div className="product-icon">
                            <Rating
                              initialRating={blog?.rating}
                              emptySymbol="far fa-star"
                              fullSymbol="fas fa-star"
                              readonly
                            ></Rating>
                          </div>
                        </Card.Body>
                        <Card.Footer className="card-footer mx-auto">
                          <Link to={`/blogdetails/${blog?._id}`}>
                            Read More...
                          </Link>
                        </Card.Footer>
                      </Card>
                    </CardGroup>
                  </Col>
                )}
              </div>
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
        <div className="pagination text-center d-flex justify-content-center align-content-center w-100">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              key={number}
              onClick={() => setPage(number)}
              className={number === page ? "selected" : ""}
            >
              {number}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
