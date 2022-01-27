import Button from "react-bootstrap/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <Navbar className="custome-bg" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="nav_link">
          Travel Trust
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home" className="nav_link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/package" className="nav_link">
              Booking
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="nav_link">
              DashBoard
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="nav_link">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav_link">
              About
            </Nav.Link>
          </Nav>
          {!user?.email ? (
            <Nav.Link as={Link} to="/login">
              <div className="login-or-signup">
                <Button className="login-btn">Log In</Button>
              </div>
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login">
              <div className="login-or-signup">
                <Button onClick={handleLogOut} className="login-btn">
                  Log Out
                </Button>
              </div>
            </Nav.Link>
          )}
          <Nav.Link>
            {/* {user?.email && (
              <Navbar.Text className="text-white">
                Signed in as:{" "}
                <small className="pe-1">{user?.displayName}</small>
                <img className="user-img" src={user?.photoURL} alt="" />
              </Navbar.Text>
            )} */}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
