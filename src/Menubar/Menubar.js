import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../Hook/UseAuth";

const Menubar = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
            <Navbar.Brand>
              <i className="far fa-eye"></i> Eye Care BD
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink
                  to="/home"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "White",
                  }}
                >
                  Home
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink
                  to="/services"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "White",
                  }}
                >
                  Services
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/medicine"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "White",
                  }}
                >
                  Medicine
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/education"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "White",
                  }}
                >
                  Education
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink
                  to="/about"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "White",
                  }}
                >
                  About Us
                </NavLink>
              </Nav.Link>
              {!user.email ? (
                <Nav.Link>
                  <NavLink
                    to="/login"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "White",
                    }}
                  >
                    Log In
                  </NavLink>
                </Nav.Link>
              ) : (
                <div>
                  <span style={{ color: "white" }}>{user.email}</span>
                  <Button onClick={logOut}> LogOut</Button>
                </div>
              )}
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menubar;
