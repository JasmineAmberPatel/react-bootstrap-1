import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../src/Components/Alert';

it('renders an error message', () => {
  const wrapper = shallow((
    <Alert message="Error!" />
  ));
  expect(wrapper.find('.Alert').text()).toBe('Error!');
});

it('renders a success message', () => {
  const wrapper = shallow((
    <Alert message="Sucess!!!" success />
  ));
  expect(wrapper.find('.Alert.success').text()).toBe('Sucess!!!');
});
