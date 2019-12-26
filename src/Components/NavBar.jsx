import React from 'react';
import '../../Styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className="nav">
      <img className="logo" src="../images/logo.png" />
      <Link className="item" to="/">View Properties</Link>
      <Link className="item" to="/add-property">Add a Property</Link>
    </ul>
  );
};

export default NavBar;
