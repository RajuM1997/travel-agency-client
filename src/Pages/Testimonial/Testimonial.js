import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import Rating from "react-rating";
import { Spinner } from "react-bootstrap";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4500/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);
  console.log(reviews);
  return (
    <div className="testimonial py-5">
      <div className="text-center pb-5">
        <i className="text-warning">
          <h6>Client Sey!!!!</h6>
        </i>
        <h1 className="title">
          Explore <br /> our <br /> testimonials
        </h1>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {!loading ? (
            reviews.map((review) => (
              <div className="col" key={review._id}>
                <div className="card h-100">
                  <img
                    src={review.image}
                    className="d-block img-fluid"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{review.name}</h5>

                    <p className="card-text">{review.description}</p>
                    {/* display the ratting */}
                    <div className="testimonial-icon">
                      <Rating
                        initialRating={review.reveiw}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly
                      ></Rating>
                    </div>
                  </div>
                </div>
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
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
