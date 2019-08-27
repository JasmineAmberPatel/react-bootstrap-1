import React from 'react';
import '../Styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div>
        <img className="logo" src="../images/logo.png" />
      </div>
      <ul className="nav">
        <li className="item" />
        <li>View Properties</li>
        <li>Add a Property</li>
      </ul>
    </div>
  );
};

export default NavBar;

