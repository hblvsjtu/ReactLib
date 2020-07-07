import React, { memo } from "react";

function areEqual(prevProps: any, nextProps: any) {
    return prevProps.value === nextProps.value;
}

export default memo((props: any) => {
    console.log("Item fresh!");
    const { key, content } = props.value;
    return (
        <>
            <li style={{ display: "inline-block", listStyle: "none" }}>
                {content}
            </li>
            <button onClick={() => props.modify(key, 3)}>删除</button>
            <button onClick={() => props.modify(key, 1)}>已完成</button>
        </>
    );
}, areEqual);
