import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

const Oder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://eerie-demon-56840.herokuapp.com/myOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  });
  return (
    <div>
      <div>
        <h1 className="text-center pb-5">I am Dashboard {orders.length}</h1>
        <div className="all-products">
          <div className="row container text-center">
            {orders?.map((pd) => (
              <div className="col-md-6 col-lg-4">
                <div className=" border border p-2 m-2">
                  <div className="img">
                    <img src={pd.imgUrl} alt="" />
                  </div>
                  <h4>{pd.email}</h4>
                  <h5>{pd?.name}</h5>
                  <h5>{pd?.price}</h5>
                  <h6>{pd?.description}</h6>
                  <button className="btn btn-danger m-2">delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oder;
