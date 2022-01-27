import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const MangeBlog2 = () => {
  const [blogs, setblogs] = useState([]);
  const { register, handleSubmit } = useForm();
  const [isDelete, setIsDelete] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [blogId, setblogId] = useState("");
  useEffect(() => {
    fetch(`http://localhost:4500/blog`)
      .then((res) => res.json())
      .then((data) => {
        setblogs(data.blogs);
        setLoading(false);
      });
  }, [isDelete]);

  // const status = "apporved";
  const handleBlogId = (id) => {
    setblogId(id);
    console.log(id);
  };

  const onSubmit = (data) => {
    console.log(data, blogId);
    fetch(`http://localhost:4500/blogStatusUp/${blogId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          swal("Good job!", "Update successfull", "success");
        } else {
          swal("Opps!", "Update failed", "success");
        }
      })
      .catch((err) => console.log(err.message));
  };

  // handle delete order my order
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure, delete this package?");
    if (proceed) {
      fetch(`http://localhost:4500/deleteBlog/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setIsDelete(!isDelete);
            swal("Good job!", "deleted successfull", "success");
          } else {
            setIsDelete(false);
          }
        });
    }
  };
  return (
    <div>
      {blogs.map((blog) => (
        <div
          className="order text-center py-5"
          onClick={() => handleBlogId(blog?._id)}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <img src={blog.img} alt="" />
            <input
              {...register("title")}
              defaultValue={blog.title}
              className="p-2 m-2 w-50"
            />
            <br />
            <input
              {...register("address")}
              defaultValue={blog.address}
              className="p-2 m-2 w-50"
            />
            <br />
            <textarea
              //   {...register("expense")}
              defaultValue={blog.expense}
              className="p-2 m-2 w-50"
            />
            <br />
            <select
              onClick={() => handleBlogId(blog?._id)}
              {...register("status")}
            >
              <option value="">{blog?.status}</option>
              <option value="pending">pending</option>
              <option value="approve">approve</option>
            </select>
            <br />
            <input
              type="submit"
              value="Update"
              className="btn btn-success w-25"
            />
          </form>
          <div className="delete_btn">
            <button onClick={() => handleDelete(blog?._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MangeBlog2;
