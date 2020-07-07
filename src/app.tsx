import React from "react";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import TodoList from "./components/todolist";
import Hello from "./components/Hello/Hello";
import "./app.less";

export default (props: any) => {
    return (
        <Router>
            <Link to="/" className="link">
                Hello
            </Link>
            <Link to="/todoList" className="link">
                TodoList
            </Link>
            <hr />
            <Route path="/" exact component={Hello}></Route>
            <Route path="/todoList" component={TodoList}></Route>
        </Router>
    );
};
