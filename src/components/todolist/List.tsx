import React, { memo } from "react";
import Item from "./Item";

function areEqual(prevProps: any, nextProps: any) {
    return (
        prevProps.list === nextProps.list &&
        prevProps.fiterStatus === nextProps.fiterStatus
    );
}

export default memo((props: any) => {
    console.log("List fresh!");
    const { fiterStatus, list } = props;
    return (
        <>
            {list
                .filter((item: any) => {
                    if (fiterStatus) return item.status === fiterStatus;
                    return item.status !== 3;
                })
                .map((item: any, index: number) => (
                    <Item
                        key={`list-${index}`}
                        value={item}
                        modify={props.modify}
                    />
                ))}
        </>
    );
}, areEqual);
