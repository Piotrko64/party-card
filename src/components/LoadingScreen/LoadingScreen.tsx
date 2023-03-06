import { useTranslation } from "react-i18next";
import classes from "./loadingScreen.module.scss";

export function LoadingScreen() {
    const { t } = useTranslation("ui");

    return (
        <>
            <div className={classes.screen}>
                <h1>{t("loading")}</h1>
            </div>
        </>
    );
}
