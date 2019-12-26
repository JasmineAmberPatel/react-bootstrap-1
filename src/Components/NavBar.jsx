import React from 'react';
import '../../Styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="nav">
        <img className="logo" src="../images/logo.png" />
        <Link className="item" to="/">View Properties</Link>
        <Link to="/add-property">Add a Property</Link>
      </ul>
    </div>
  );
};

export default NavBar;
