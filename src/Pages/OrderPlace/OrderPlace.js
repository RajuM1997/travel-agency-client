import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import swal from "sweetalert";

const OrderPlace = () => {
  const { user } = useAuth();
  console.log(user);

  const { id } = useParams();
  const [singlePack, setSingleProduct] = useState({});
  const [status, setStatus] = useState("pending");
  // const [result, setResult] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4500/package/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
      });
  }, [id]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.status = status;
    fetch(`http://localhost:4500/order`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          swal(
            ` "Good job!", ${user.displayName}, your order successfull , "success" `
          );
          reset();
        }
      });
  };
  return (
    <div>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <img src={singlePack?.image} className="img-fluid" alt="" />
          </div>
          <div className="col-md-6">
            <h3>{singlePack?.title}</h3>
            <h5>Price: ${singlePack?.price}</h5>
            <h5>{singlePack?.duration}</h5>
            <h5>{singlePack?.reviw}</h5>
            <div>
              <small>{singlePack?.description}</small>
            </div>
          </div>
        </div>
        <div className="order text-center py-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              defaultValue={user.displayName}
              placeholder="name"
              className="p-2 m-2 w-50"
            />
            <input
              {...register("email")}
              defaultValue={user.email}
              placeholder="email"
              className="p-2 m-2 w-50"
            />
            <br />
            <input
              {...register("address")}
              placeholder="address"
              type="address"
              className="p-2 m-2 w-50"
            />
            <br />
            <input
              {...register("phone")}
              placeholder="Description"
              className="p-2 m-2 w-50"
            />
            <input
              {...register("price")}
              placeholder="price"
              className="p-2 m-2 w-50"
            />
            <input
              {...register("product")}
              placeholder="Package Name"
              className="p-2 m-2 w-50"
            />
            <br />
            {errors.exampleRequired && <span>This field is required</span>}

            <input
              type="submit"
              value="Book Now"
              className="btn btn-success w-25"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPlace;
