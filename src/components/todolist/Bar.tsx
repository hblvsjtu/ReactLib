import React, { memo } from "react";

const statusList = [
    {
        value: 0,
        label: "全部",
    },
    {
        value: 1,
        label: "已完成",
    },
    {
        value: 2,
        label: "未完成",
    },
];

function areEqual(prevProps: any, nextProps: any) {
    return true;
}

export default memo((props: any) => {
    console.log("Bar fresh!");
    return (
        <div>
            {statusList.map(({ value, label }, index) => (
                <button
                    key={"btn-" + index}
                    onClick={() => props.onChange(value)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}, areEqual);
