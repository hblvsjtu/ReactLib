import React, {
    memo,
    ButtonHTMLAttributes,
    AnchorHTMLAttributes,
    useEffect,
    useRef,
    useState,
} from "react";
import isFunction from "lodash/isFunction";
import classnames from "classnames";
import Loading from "../../style/icon/loading.svg";
import "./index.less";

type ButtonNativeProps = ReactLib.ButtonNativeProps;
type NativeButtonProps = ButtonNativeProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = ButtonNativeProps & AnchorHTMLAttributes<HTMLElement>;
type Props = Partial<NativeButtonProps & AnchorButtonProps>;

const areEqual: any = (prevProps: any, nextProps: any): boolean => {
    return ["type", "disabled", "size", "children", "className", "href"].every(
        (key) => prevProps[key] === nextProps[key]
    );
};

const Button: React.FC<Props> = (props) => {
    const {
        btnType = "default",
        disabled,
        size,
        children,
        href,
        onClick,
        ...restProps
    } = props;
    const className = classnames([
        "btn",
        `btn-${size}`,
        `btn-${btnType}`,
        { disabled },
    ]);
    const loadingSizeStyle = classnames(["loading", `loading-${size}`]);
    const [loading, setLoadingStatus] = useState(false);
    const ref: any = useRef("btn");
    let timer: any;
    const proxyClick: ((event: ReactLib.ClickEvent) => void) | undefined = (
        event
    ) => {
        if (isFunction(onClick)) {
            const res = onClick(event);
            if ((res as any) instanceof Promise) {
                setLoadingStatus(true);
                (res as any).then((res: any) => {
                    setLoadingStatus(false);
                    timer = setTimeout(() => ref.current.blur(), 200);
                });
            } else {
                timer = setTimeout(() => ref.current.blur(), 200);
            }
        }
    };
    useEffect(() => {
        return () => timer && clearTimeout(timer);
    }, [loading]);

    return btnType && btnType === "link" ? (
        <a
            className={className}
            href={href}
            onClick={proxyClick}
            {...restProps}
        >
            {children}
        </a>
    ) : (
        <>
            <button
                type="button"
                disabled={disabled}
                className={className}
                onClick={proxyClick}
                ref={ref}
                {...restProps}
            >
                {loading && <Loading className={loadingSizeStyle} />}
                {children}
            </button>
        </>
    );
};

export default memo(Button, areEqual);
