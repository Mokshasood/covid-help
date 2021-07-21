import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Dropdown, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expanded={expanded} collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand><Link to="/" className="navbar-brand">
        COVID TRACKER</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setExpanded(false)}><Link to="/home" className="nav-link">Home</Link></Nav.Link>
          <Nav.Link onClick={() => setExpanded(false)}><Link to="/stats" className="nav-link">Stats</Link></Nav.Link>
          <Nav.Link onClick={() => setExpanded(false)}><Link to="/precautions" className="nav-link">Precautions</Link></Nav.Link>
          <Nav.Link onClick={() => setExpanded(false)}><Link to="/essentials" className="nav-link">Essentials</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

);
};

export default NavBar;
