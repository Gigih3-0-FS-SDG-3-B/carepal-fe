import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "../auth/authContext";

function NavBar() {
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar expand="lg" className="bg-blue-500">
      <Container className="max-w-full">
        <Navbar.Brand href="home" className="text-yellow-500 font-extrabold">
          CarePal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className="text-yellow-500 font-bold	">
              Home
            </Nav.Link>
            <Nav.Link href="/caregivers" className="text-yellow-500 font-bold	">
              Caregivers
            </Nav.Link>
            <Nav.Link href="/book" className="text-yellow-500 font-bold	">
              Book Now!
            </Nav.Link>
            <Nav.Link href="/orders" className="text-yellow-500 font-bold	">
              Order Details
            </Nav.Link>
            <Nav.Link href="/curent" className="text-yellow-500 font-bold	">
              Curent Order
            </Nav.Link>
            <Nav.Link href="/user" className="text-yellow-500 font-bold	">
              Profile
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {isLoggedIn ? (
              <Nav.Link onClick={handleLogout} className="text-yellow-500 font-bold" href="home">Logout</Nav.Link>
            ) : (
              <Nav.Link href="/login" className="text-yellow-500 font-bold">
                Login
              </Nav.Link>
            )}
            <Nav.Link href="/user-profile" className="text-yellow-500 font-bold">
              <i className="bi bi-person"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
