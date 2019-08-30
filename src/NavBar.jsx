import React from 'react';
import '../Styles/NavBar.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="NavBar">
        <ul className="nav">
          <img className="logo" src="../images/logo.png" />
          <Link className="item" />
          <Link to="/">View Properties</Link>
          <Link to="/add-property">Add a Property</Link>
        </ul>
      </div>
    );
  }
}

export default NavBar;
