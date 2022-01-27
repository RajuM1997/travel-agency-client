import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useParams } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4500/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleBlog(data);
      });
  }, [id]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert("comment comming soon.....");
    reset();
  };

  return (
    <div>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <img src={singleBlog?.img} className="img-fluid" alt="" />
            <strong className="">
              <i>Location: {singleBlog?.address}</i>
            </strong>
          </div>
          <div className="col-md-6">
            <h3 className="py-2">{singleBlog?.name}</h3>
            <h5 className="py-2">{singleBlog?.title}</h5>
            <h5>{singleBlog?.dataTime}</h5>
            <div className="py-2">
              <small>{singleBlog?.expense}</small>
            </div>
            <div className="product-icon py-2">
              <Rating
                initialRating={singleBlog?.rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
              ></Rating>
            </div>
          </div>
        </div>
        <div className="comment_section py-4 mx-auto text-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              {...register("comment")}
              placeholder="Add Comment"
              className="p-2 m-2 w-50"
            />

            <br />
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              type="submit"
              value="Add Review"
              className="btn btn-danger"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
