import React from "react";
import "jest-enzyme";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../src/app";
import Bar from "../src/components/todolist/Bar";

configure({ adapter: new Adapter() });

describe("A suite", function () {
    it("Jest-React-TypeScript 尝试运行", () => {
        const renderer = shallow(<span>hello world</span>);
        expect(renderer.text()).toEqual("hello world"); // Pass
    });

    it("should render without throwing an error", function () {
        const renderer = shallow(<Bar />);
        expect(renderer.text()).toEqual("全部已完成未完成"); // Pass
    });

    it('should be selectable by class "link"', function () {
        expect(mount(<App />)).toHaveHTML(
            '<a class="link" href="#/">Hello</a><a class="link" href="#/todoList">TodoList</a><hr><div class="hello"><div class="greeting">Hello undefined!</div><button type="button">登陆</button></div>'
        ); // Pass
    });
});

// 测试API：https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme#usage-with-typescript
