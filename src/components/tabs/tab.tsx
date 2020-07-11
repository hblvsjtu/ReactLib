import React, { memo } from "react";

interface Props {
    active?: boolean;
    onClick?:
        | ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void)
        | undefined;
    children?: any;
}

function areEqual(prevProps: Props, nextProps: Props) {
    return prevProps.active === nextProps.active;
}

const Tab: React.FC<Props> = (props) => {
    return (
        <li
            style={{ color: props.active ? "red" : "#000" }}
            onClick={props.onClick}
        >
            {props.children}
        </li>
    );
};

export default memo(Tab, areEqual);
