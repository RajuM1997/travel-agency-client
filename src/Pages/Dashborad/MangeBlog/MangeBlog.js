import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const MangeBlog = () => {
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
        if (data.acknowledged > 0) {
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
  // console.log(blogs);

  return (
    <div className="container py-5">
      <h1 className="text-center pb-3">All blogs {blogs.length}</h1>

      <div class="row">
        <div className="col-md-12 table-responsive" id="no-more-table">
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>User Name</th>
                <th>Title</th>
                <th>Email</th>
                <th>Experience</th>
                <th>Adderss</th>
                <th>Action</th>
              </tr>
            </thead>
            {!Loading ? (
              blogs?.map((blog, index) => (
                <tbody>
                  <tr className="text-center">
                    <td data-title="#">{index}</td>
                    <td data-title="User Name">{blog?.name}</td>
                    <td data-title="User Name">
                      <input type="text" value={blog?.title} />
                    </td>
                    <td data-title="Email">{blog?.email}</td>
                    <td data-title="Product Name">
                      {blog?.expense.slice(0, 60)}
                    </td>
                    <td data-title="Adderss">{blog?.address}</td>
                    <td data-title="Status">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <select
                          onClick={() => handleBlogId(blog?._id)}
                          {...register("status")}
                        >
                          <option value="">{blog?.status}</option>
                          <option value="pending">pending</option>
                          <option value="approve">approve</option>
                        </select>
                        <input
                          type="submit"
                          value="Update"
                          className="update-btn ms-2 mt-2"
                        />
                      </form>
                    </td>
                    <td data-title="Action">
                      <div className="btn-div">
                        <span
                          onClick={() => handleDelete(blog?._id)}
                          className="delete-btn me-2"
                        >
                          Delete
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <div className="spiner mx-auto pt-5">
                <Spinner className="text-center" animation="border" />
              </div>
            )}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MangeBlog;
