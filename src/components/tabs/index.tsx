import React from "react";
import Tab from "./Tab";

interface MyState {
    activeIndex: number;
}

interface MyProps {
    message?: string;
}

class Tabs extends React.PureComponent<MyProps, MyState> {
    state: MyState = {
        activeIndex: 0,
    };
    render() {
        const children = Array.isArray(this.props.children)
            ? this.props.children
            : [this.props.children];
        return (
            <>
                {children.map((child: any, index: number) =>
                    React.cloneElement(child, {
                        key: `li-${index}`,
                        active: this.state.activeIndex === index,
                        onClick: () => this.setState({ activeIndex: index }),
                    })
                )}
            </>
        );
    }
}

export default () => (
    <Tabs>
        <Tab>1</Tab>
        <Tab>1</Tab>
    </Tabs>
);
