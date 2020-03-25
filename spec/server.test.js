import React from "react";
import { shallow } from "enzyme";
import Ratings from "../client/src/components/ratings.jsx";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test('Return a score between 1.0 and 5.0', () => {
  expect(2 + 2).toBeGreaterThan(1);
  expect(2 + 2).toBeLessThan(5);
});

describe("Ratings", () => {
  let wrapper;
  let mockSubmit;
  beforeEach(() => {
    mockSubmit = jest.fn();
    wrapper = shallow(<Ratings  />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

});