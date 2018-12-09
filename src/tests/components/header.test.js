import React from "react";
// import ReactShallowRenderer from "react-test-renderer/shallow";

import { shallow } from 'enzyme';
import Header from "../../components/Header";

it('should render Header correctly', () => {
  const wrapper = shallow(<Header />);

  console.log("wrapper::", wrapper.find('h1'));
  
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);

  // expect(renderer.getRenderOutput()).toMatchSnapshot();
})