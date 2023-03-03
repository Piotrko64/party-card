import { Link } from "react-router-dom";
import classes from "./singleAnchor.module.scss";

type Props = {
    color: string;
    text: string;
    href: string;
};

export function SingleAnchor({ text, color, href }: Props) {
    return (
        <Link
            style={{
                color,
                borderColor: color,
            }}
            to={href}
            className={classes.anchor}
        >
            {text}
        </Link>
    );
}
