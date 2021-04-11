import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
	return (
	<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand"> C </Link>
      <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/" className="nav-link"> Home </Link>
        </li>
        <li className="navbar-item">
        <Link to="/stats" className="nav-link"> Stats</Link>
        </li>
        <li className="navbar-item">
        <Link to="/vaccine" className="nav-link"> Vaccine </Link>
        </li>
        <li className="navbar-item">
        <Link to="/essentials" className="nav-link">Essentials</Link>
        </li>
      </ul>
      </div>
    </nav>
	);
};

export default Navbar;