import React from "react";
import { shallow } from 'enzyme';
// import  toJson from "enzyme-to-json";
import { Header } from "../../components/Header";


let wrapper, startSignOut;
beforeEach(()=> {
  startSignOut = jest.fn();
  wrapper = shallow(<Header startSignOut={startSignOut} />);
})

it('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

it('should call signOut Action on Button Click', () => {
  wrapper.find('button').simulate('click');

  expect(startSignOut).toBeCalled();
})

// import ReactShallowRenderer from "react-test-renderer/shallow";

 // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);

  // expect(renderer.getRenderOutput()).toMatchSnapshot();