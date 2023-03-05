import { HomeLink } from "ui/homeLink/HomeLink";
import classes from "./infoPageMainComponent.module.scss";
import { Trans, useTranslation } from "react-i18next";

export function InfoPageMainComponent() {
    const { t } = useTranslation("infoPage");

    return (
        <div className={classes.container}>
            <HomeLink />

            <div
                dangerouslySetInnerHTML={{
                    __html: t("description", { interpolation: { escapeValue: false } }),
                }}
            />
        </div>
    );
}
