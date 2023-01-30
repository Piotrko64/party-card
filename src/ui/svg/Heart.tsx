import { PropsIcon } from "types/svg/PropsIcon";
import classes from "./styleSVG.module.scss";

export function Heart(props: PropsIcon) {
    return (
        <svg
            className={classes.svg}
            viewBox="0 0 166 162"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ ...props }}
        >
            <path
                d="M162 43.3778C162 21.6325 143.575 4 120.85 4C103.865 4 89.2761 13.8532 83 27.9155C76.7239 13.8532 62.1352 4 45.1414 4C22.4333 4 4 21.6325 4 43.3778C4 106.557 83 158 83 158C83 158 162 106.557 162 43.3778Z"
                stroke={props.color}
                className={classes.path}
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
