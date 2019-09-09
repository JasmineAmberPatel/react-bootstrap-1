import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Styles/PropertyCard.css';

const PropertyCard = props => {
  return (
    <div className="propertyCard">
      <div className="title">{props.title}</div>
      <div className="type">{props.type}</div>
      <div className="bathrooms">Bathrooms: {props.bathrooms}</div>
      <div className="bedrooms">Bedrooms: {props.bedrooms}</div>
      <div className="price">${props.price}</div>
      <div className="city"> {props.city}</div>
      <div className="email">Contact: {props.email}</div>
    </div>
  );
};

export default PropertyCard;
