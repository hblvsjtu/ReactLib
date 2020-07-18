interface MyArray extends Array<any> {
    [method: string]: any;
}

type OberserData = Object | Array<any>;

type CallBacks = Array<() => any>;

namespace ReactLib {
    /**
     * Make all properties in T optional
     */
    type Partial<T> = {
        [P in keyof T]?: T[P];
    };

    type ClickEvent = React.MouseEvent<HTMLElement, MouseEvent>;
    type BtnType = "primary" | "default" | "danger" | "link";
    type Size = "default" | "sm" | "m" | "lg" | "xl";

    interface ButtonNativeProps {
        btnType?: BtnType;
        disabled?: Boolean;
        size?: Size;
        children: React.ReactNode;
        className?: string;
        href?: string;
    }
}
