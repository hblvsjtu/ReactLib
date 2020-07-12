import React from "react";
import "jest-enzyme";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "../Tabs";

configure({ adapter: new Adapter() });

describe("A suite", function () {
    it("Tabs innner html", function () {
        expect(mount(<Tabs />)).toHaveHTML(
            '<li style="color: red;">1</li><li style="color: rgb(0, 0, 0);">1</li>'
        ); // Pass
    });
});

// 测试API：https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme#usage-with-typescript
