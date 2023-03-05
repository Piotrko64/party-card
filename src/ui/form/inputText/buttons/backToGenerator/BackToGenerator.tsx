import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classes from "./backToGenerator.module.scss";

export function BackToGenerator() {
    const { t } = useTranslation("ui");

    return createPortal(
        <Link to="/generateCard" className={classes.back} preventScrollReset={true}>
            {t("backToGenerator")}
        </Link>,
        document.body
    );
}
