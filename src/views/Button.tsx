import React from "react";
import Button from "../components/Button";

const fetchData = () =>
    new Promise((resolve, reject) => {
        try {
            setTimeout(resolve, 3000);
        } catch (err) {
            reject(err);
        }
    });
export default () => (
    <>
        <Button size="lg" onClick={fetchData}>
            click
        </Button>
        <Button
            btnType="link"
            href="https://www.baidu.com"
            size="sm"
            target="_blank"
            onClick={() => console.log("btn click!")}
        >
            click
        </Button>
    </>
);
