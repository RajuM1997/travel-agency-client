import React, { useState } from "react";
import "./BlogPost.css";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import swal from "sweetalert";

const BlogPost = () => {
  const { user } = useAuth();
  const [load, setLoad] = useState(false);
  const [status, setStatus] = useState("pending");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.status = status;
    // console.log(data);
    let dataTime = new Date();
    // console.log(dataTime.toLocaleString());
    data.dataTime = dataTime.toLocaleString();

    const rf = new FileReader();
    rf.readAsDataURL(data.img[0]);
    rf.onloadend = function (event) {
      const body = new FormData();
      body.append("image", event.target.result.split(",").pop()); //To delete 'data:image/png;base64,' otherwise imgbb won't process it.
      body.append("name", data.img[0].name);
      console.log(data.img[0].name);
      fetch(
        "https://api.imgbb.com/1/upload?expiration=600&key=ec459987677b59af7d45efb65f3326f1",
        {
          method: "post",
          body: body,
        }
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result.data.url);
          data.img = result.data.url;
          fetch(`http://localhost:4500/blog`, {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((datas) => {
              console.log(datas);
              if (datas.acknowledged) {
                setLoad(false);
                swal(
                  ` "Good job!", ${user.displayName}, your post successfull , "success" `
                );
                reset();
              }
            });
        })
        .catch((err) => {
          setLoad(false);
          window.alert("Uploaded Image Type Not Accepted", err.message);
        });
    };
  };
  return (
    <div>
      <div className="order text-center py-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            defaultValue={user.displayName}
            placeholder="name"
            className="p-2 m-2 w-50"
            required
          />
          <br />
          <input
            {...register("title")}
            placeholder="blog title"
            className="p-2 m-2 w-50"
            required
          />
          <br />
          <input
            {...register("email")}
            defaultValue={user.email}
            placeholder="email"
            className="p-2 m-2 w-50"
            required
          />
          <br />
          <input
            {...register("img", { required: true })}
            type="file"
            id="input_img"
            accept="image/*"
            className="p-2 m-2 w-50"
            required
          />
          <br />
          <input
            {...register("address")}
            placeholder="Address"
            type="address"
            className="p-2 m-2 w-50"
            required
          />
          <br />
          <textarea
            {...register("expense")}
            placeholder="Expense"
            className="p-2 m-2 w-50"
            required
          />
          <input
            {...register("rating")}
            placeholder="Rating"
            type="number"
            className="p-2 m-2 w-50"
            required
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
  );
};

export default BlogPost;
