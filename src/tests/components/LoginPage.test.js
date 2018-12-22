import React from 'react';
import { shallow } from 'enzyme';
import loginPage, { LoginPage } from '../../components/LoginPage';

describe('Login Page', () => {
  it('should render a loginPage Component', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
  })
});