import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Farmer Dashboard</h1>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/training">Training Sessions</Link></li>
        <li><Link to="/ecommerce">Millet E-Commerce</Link></li>
        <li><Link to="/guidebook">Guidebook</Link></li>
        <li><Link to="/community">Community</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
