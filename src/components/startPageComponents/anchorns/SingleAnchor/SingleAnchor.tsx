import { Link } from "react-router-dom";
import classes from "./singleAnchor.module.scss";
import { useTranslation } from "react-i18next";

type Props = {
    color: string;
    text: string;
    href: string;
    textEN: string;
};

export function SingleAnchor({ text, color, href, textEN }: Props) {
    const { i18n, t } = useTranslation("ui");

    return (
        <Link
            style={{
                color,
                borderColor: color,
            }}
            to={href}
            className={classes.anchor}
        >
            {i18n.language?.includes("pl") ? text : textEN}
            {t("colors")}
        </Link>
    );
}
