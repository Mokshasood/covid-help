import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Dropdown, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand><Link to="/" className="navbar-brand">
        COVID TRACKER</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/home" className="nav-link">Home</Link></Nav.Link>
          <Nav.Link><Link to="/stats" className="nav-link">Status</Link></Nav.Link>
          <Nav.Link><Link to="/precautions" className="nav-link">Precautions</Link></Nav.Link>
          <Nav.Link><Link to="/essentials" className="nav-link">Essentials</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

);
};

export default NavBar;