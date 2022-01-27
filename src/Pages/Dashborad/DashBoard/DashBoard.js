import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./DashBoard.css";

const Dashboard = () => {
  const { admin, user } = useAuth();
  return (
    <div className="">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row g-0 w-100">
            <div className="col-lg-3 col-md-3 col-sm-12 pt-5">
              <div className="bashboard-manu p-1 mx-auto text-center">
                <div className="all-menu mt-5">
                  {/* user profile start here */}
                  {/* user profile end here */}
                  {user && (
                    <div className="all-order active">
                      <div className="icon pe-3">
                        <i class="fas fa-arrow-right"></i>
                      </div>
                      <li className="admin-menu p-2">
                        {" "}
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#111",
                            fontWeight: "500",
                            background: "none",
                          }}
                          to="/dashboard/profile"
                        >
                          Profile
                        </NavLink>
                      </li>
                    </div>
                  )}
                  {user && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i class="fas fa-arrow-right"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#111",
                            fontWeight: "500",
                            background: "none",
                          }}
                          to={`/dashboard/blogPost`}
                        >
                          Blog Post
                        </NavLink>
                      </li>
                    </div>
                  )}
                  {admin && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i class="fas fa-arrow-right"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#111",
                            fontWeight: "500",
                            background: "none",
                          }}
                          to={`/dashboard/addPackage`}
                        >
                          Add Package
                        </NavLink>
                      </li>
                    </div>
                  )}
                  {user && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i class="fas fa-arrow-right"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#111",
                            fontWeight: "500",
                            background: "none",
                          }}
                          to={`/dashboard/myOrder`}
                        >
                          My Package
                        </NavLink>
                      </li>
                    </div>
                  )}
                  {/* {user && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i className="fas fa-baby-carriage"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#111",
                            fontWeight: "500",
                            background: "none",
                          }}
                          to={`/dashboard/mypost`}
                        >
                          My Post
                        </NavLink>
                      </li>
                    </div>
                  )} */}
                  {admin && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i class="fas fa-arrow-right"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#111",
                            fontWeight: "500",
                            background: "none",
                          }}
                          to={`/dashboard/admin`}
                        >
                          Add Admin
                        </NavLink>
                      </li>
                    </div>
                  )}
                  {admin && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i class="fas fa-arrow-right"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#111",
                            fontWeight: "500",
                            background: "none",
                          }}
                          to={`/dashboard/mangePackage`}
                        >
                          Mange Package
                        </NavLink>
                      </li>
                    </div>
                  )}
                  {admin && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i class="fas fa-arrow-right"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#111",
                            fontWeight: "500",
                            background: "none",
                          }}
                          to={`/dashboard/mangeOrder`}
                        >
                          Mange Order
                        </NavLink>
                      </li>
                    </div>
                  )}
                  {admin && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i class="fas fa-arrow-right"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#111",
                            fontWeight: "500",
                            background: "none",
                          }}
                          to={`/dashboard/mangeBlog`}
                        >
                          Mange Blog
                        </NavLink>
                      </li>
                    </div>
                  )}
                  {/* {admin && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i class="fas fa-arrow-right"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#111",
                            fontWeight: "500",
                            background: "none",
                          }}
                          to={`/dashboard/mangeBlog2`}
                        >
                          Mange Blog2
                        </NavLink>
                      </li>
                    </div> */}
                  )}
                  {user && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i class="fas fa-arrow-right"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#111",
                            fontWeight: "500",
                            background: "none",
                          }}
                          to={`/dashboard/review`}
                        >
                          Experience Review
                        </NavLink>
                      </li>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-12 pt-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
