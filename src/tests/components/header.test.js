import React from "react";
import { shallow } from 'enzyme';
// import  toJson from "enzyme-to-json";
import { Header } from "../../components/Header";

it('should render Header correctly', () => {
  const wrapper = shallow(<Header startSignOut={() => {}} />);
  expect(wrapper).toMatchSnapshot()
})

// import ReactShallowRenderer from "react-test-renderer/shallow";

 // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);

  // expect(renderer.getRenderOutput()).toMatchSnapshot();