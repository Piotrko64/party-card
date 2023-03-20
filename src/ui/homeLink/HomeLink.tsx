import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classes from "./homeLink.module.scss";

export function HomeLink() {
    const { t } = useTranslation("ui");

    return (
        <div className={classes.backToHome}>
            <Link to="/">
                <img src="/icons/leftArrow.png" alt="leftArrow" /> {t("back")}{" "}
            </Link>
        </div>
    );
}
