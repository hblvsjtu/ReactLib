import React, { memo } from "react";
import Input from "./Input";
import Bar from "./Bar";
import List from "./List";

const cloneDeep = function (obj: any) {
    if (typeof obj !== "object") return obj;
    const isArray = Array.isArray(obj);
    const copy: any = isArray ? [] : {};
    if (isArray) obj.forEach((element: any) => copy.push(cloneDeep(element)));
    else for (let key in obj) copy[key] = cloneDeep(obj[key]);
    return copy;
};

export default class TodoList extends React.PureComponent {
    constructor(props: any) {
        super(props);
        this.state = {
            inputValue: "",
            status: 0,
            list: [],
        };
    }

    addItem = () => {
        this.setState((prevState: any, props) => {
            const { list, inputValue } = prevState;
            return {
                list: list.concat([
                    {
                        content: inputValue,
                        key: list.length,
                        status: 2,
                    },
                ]),
                inputValue: "",
            };
        });
    };

    modify = (key: number, status: string) => {
        this.setState((prevState: any) => {
            const copy = cloneDeep(prevState.list);
            const target = copy.find((item: any) => item.key === key);
            if (target) {
                target.status = status;
                return { list: copy };
            }
        });
    };

    render() {
        const state: any = this.state;
        return (
            <>
                <Input
                    value={state.inputValue}
                    onChange={(inputValue: number) =>
                        this.setState({ inputValue })
                    }
                    add={this.addItem}
                />
                <Bar onChange={(status: number) => this.setState({ status })} />
                <List
                    list={state.list}
                    fiterStatus={state.status}
                    modify={this.modify}
                />
            </>
        );
    }
}
