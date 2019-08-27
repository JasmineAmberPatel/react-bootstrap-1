import React from 'react';
import '../Styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="nav">
        <img className="logo" src="../images/logo.png" />
        <li className="item" />
        <li>View Properties</li>
        <li>Add a Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
