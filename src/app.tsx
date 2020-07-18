import React from "react";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import TodoList from "./components/Todolist";
import Hello from "./components/Hello/Hello";
import Tabs from "./components/Tabs";
import Button from "./views/Button";

export default (props: any) => {
    return (
        <Router>
            <Link to="/" className="link">
                Hello
            </Link>
            <Link to="/todoList" className="link">
                TodoList
            </Link>
            <Link to="/tabs" className="link">
                Tabs
            </Link>
            <Link to="/button" className="link">
                Button
            </Link>
            <hr />
            <Route path="/" exact component={Hello}></Route>
            <Route path="/todoList" component={TodoList}></Route>
            <Route path="/tabs" component={Tabs}></Route>
            <Route path="/button" component={Button}></Route>
        </Router>
    );
};
