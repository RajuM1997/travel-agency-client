import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddPackage = () => {
  const [packages, setPackages] = useState([]);
  const [load, setLoad] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const rf = new FileReader();
    rf.readAsDataURL(data.image[0]);
    rf.onloadend = function (event) {
      const body = new FormData();
      body.append("image", event.target.result.split(",").pop()); //To delete 'data:image/png;base64,' otherwise imgbb won't process it.
      body.append("name", data.image[0].name);
      console.log(data.image[0].name);
      fetch(
        "https://api.imgbb.com/1/upload?expiration=600&key=ec459987677b59af7d45efb65f3326f1",
        {
          method: "post",
          body: body,
        }
      )
        .then((res) => res.json())
        .then((result) => {
          // console.log(result.data.url);
          data.image = result.data.url;
          fetch(`http://localhost:4500/package`, {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((datas) => {
              // console.log(datas);
              if (datas.acknowledged) {
                setLoad(false);
                swal("package added successfull", "success");
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
    <div className="order text-center py-5">
      <h2 className="text-center pb-4">Add Packages</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("image", { required: true })}
          type="file"
          id="input_img"
          accept="image/*"
          className="p-2 m-2 w-50"
          required
        />
        <br />
        <input
          {...register("title")}
          placeholder="Title"
          className="p-2 m-2 w-50"
          required
        />
        <br />
        <input
          {...register("location")}
          placeholder="Location"
          className="p-2 m-2 w-50"
          required
        />
        <br />
        <input
          {...register("reviw")}
          placeholder="Reviw"
          type="address"
          className="p-2 m-2 w-50"
          required
        />
        <br />
        <input
          {...register("duration")}
          placeholder="Duration"
          className="p-2 m-2 w-50"
          required
        />
        <input
          {...register("price")}
          placeholder="price"
          className="p-2 m-2 w-50"
          required
        />
        <br />
        <select {...register("category")} className="p-2 m-2 w-50" required>
          <option value="united States">United States</option>
          <option value="united Kingdom">United Kingdom</option>
          <option value="south asia">South Asia</option>
        </select>
        <br />
        <textarea
          {...register("description")}
          placeholder="Description"
          className="p-2 m-2 w-50"
          required
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          type="submit"
          value="Post Package"
          className="btn btn-success w-25"
        />
      </form>
    </div>
  );
};

export default AddPackage;
