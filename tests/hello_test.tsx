declare var global: any;

import * as React from "react";
import { expect } from "chai";
import { shallow, mount, render } from "enzyme";
import { spy } from "sinon";

import { Hello } from "../src/hello";

describe("<Hello />", () => {
  it("renders the the h1", () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.find("h1")).to.have.length(1);
  });
});