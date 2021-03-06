import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from 'enzyme';
import SingleShow from '../pages/SingleShow';

configure({ adapter: new Adapter() });

describe("SingleShow Component", () => {

  const component = shallow((<SingleShow />));

  it('should have an div field', () => {
    expect(component.find('div').length).toEqual(2);
  });

  it('should have an h3 tag', () => {
    expect(component.find('p').length).toEqual(6);
  });

  it('should match the snapshot',() => {
    expect(component.html()).toMatchSnapshot();  
    });

});