import React from 'react';
import '../../Styles/PropertyCard.css';

const PropertyCard = () => {
  return (
    <div className="PropertyCard"> {
      <PropertyCard
        key={PropertyCard.type}
        title={PropertyCard.title}
        type={PropertyCard.type}
        bathrooms={PropertyCard.bathrooms}
        bedrooms={PropertyCard.bedrooms}
        price={PropertyCard.price}
        city={PropertyCard.city}
        email={PropertyCard.email}
      />
    }
    </div>
  );
};

export default PropertyCard;
