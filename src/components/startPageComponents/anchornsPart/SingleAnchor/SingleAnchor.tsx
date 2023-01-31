import classes from "./singleAnchor.module.scss";

type Props = {
    color: string;
    text: string;
    href: string;
};

export function SingleAnchor({ text, color, href }: Props) {
    return (
        <a
            style={{
                color,
                borderColor: color,
            }}
            href={href}
            className={classes.anchor}
        >
            {text}
        </a>
    );
}
