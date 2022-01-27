import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./MangeOrder.css";
import swal from "sweetalert";

const MangeProduct = () => {
  const [orders, setOrders] = useState([]);
  const { register, handleSubmit } = useForm();
  const [isDelete, setIsDelete] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [orderId, setOrderId] = useState("");
  useEffect(() => {
    fetch(`http://localhost:4500/order`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, [isDelete]);

  // const status = "apporved";
  const handleOrderId = (id) => {
    setOrderId(id);
    // console.log(id);
  };

  const onSubmit = (data) => {
    // console.log(data, orderId);
    fetch(`http://localhost:4500/statusUpdate/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal("Good job!", "Update successfull", "success");
      });
  };

  // handle delete order my order
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure, delete this package?");
    if (proceed) {
      fetch(`http://localhost:4500/deleteOrder/${id}`, {
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
    <div className="container py-5">
      <h1 className="text-center pb-3">All orders {orders.length}</h1>

      <div class="row">
        <div className="col-md-12 table-responsive" id="no-more-table">
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>User Name</th>
                <th>Title</th>
                <th>Email</th>
                <th>Adderss</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {!Loading ? (
              orders?.map((blog, index) => (
                <tbody>
                  <tr className="text-center">
                    <td data-title="#">{index}</td>
                    <td data-title="User Name">{blog?.name}</td>
                    <td data-title="Product Name">{blog?.title}</td>
                    <td data-title="Email">{blog?.email}</td>
                    <td data-title="Adderss">{blog?.address}</td>
                    <td data-title="Status">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <select
                          onClick={() => handleOrderId(blog?._id)}
                          {...register("status")}
                        >
                          <option value="">{blog?.status}</option>
                          <option value="pending">Pending</option>
                          <option value="approve">Approve</option>
                          <option value="done">Done</option>
                        </select>
                        <input
                          type="submit"
                          value="Update"
                          className="update-btn ms-2"
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

export default MangeProduct;
