import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-blue-500">
      <Container className="max-w-full">
        <Navbar.Brand href="home" className="text-yellow-500">CarePal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home" className="text-yellow-500">Home</Nav.Link>
            <Nav.Link href="caregivers" className="text-yellow-500">Caregivers</Nav.Link>
            <Nav.Link href="book" className="text-yellow-500">Book Now!</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="login" className="text-yellow-500">Login</Nav.Link>
            <Nav.Link href="user-profile" className="text-yellow-500">
              <i className="bi bi-person"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
