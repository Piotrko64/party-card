import classes from "./previewButton.module.scss";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function PreviewButton() {
    const { t } = useTranslation("ui");

    return createPortal(
        <Link to="/previewCard" className={classes.preview} preventScrollReset={true}>
            {t("preview")}
        </Link>,
        document.body
    );
}
