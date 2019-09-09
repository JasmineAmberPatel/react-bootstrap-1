import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../../src/Components/PropertyCard';

it('renders a property card', () => {
  const wrapper = shallow((
    <PropertyCard />
  ));
  expect(wrapper.find('.').text().toBe(''));
});
