import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import swal from "sweetalert";
import useAuth from "../../../Hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://eerie-demon-56840.herokuapp.com/myOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrder(data);
        setLoading(false);
      });
  }, [isDelete, user.email]);

  // handle delete order my order
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure, delete this package?");
    if (proceed) {
      fetch(`https://eerie-demon-56840.herokuapp.com/myOrder/${id}`, {
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
    <div responsive="sm md">
      <h1 className="text-center py-5">Your Order: {myOrder.length}</h1>
      <Container>
        <Row lg={12} xs={12}>
          <Col className="col-md-12 col-sm-12">
            <Table striped bordered hover>
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>User Name</th>
                  <th>Product Name</th>
                  <th>Email</th>
                  <th>Adderss</th>
                  <th>Action</th>
                  <th>status</th>
                </tr>
              </thead>
              {!Loading ? (
                myOrder?.map((order, index) => (
                  <tbody>
                    <tr className="text-center">
                      <td data-title="#">{index}</td>
                      <td data-title="User Name">{order?.text}</td>
                      <td data-title="Product Name">{order?.product}</td>
                      <td data-title="Email">{order?.email}</td>
                      <td data-title="Adderss">{order?.address}</td>
                      <td data-title="Action">
                        <div className="btn-div">
                          <span
                            onClick={() => handleDelete(order?._id)}
                            className="delete-btn me-2"
                          >
                            Delete
                          </span>
                        </div>
                      </td>
                      <td data-title="Adderss">{order?.status}</td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <div className="spiner mx-auto pt-5">
                  <Spinner className="text-center" animation="border" />
                </div>
              )}
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyOrder;
