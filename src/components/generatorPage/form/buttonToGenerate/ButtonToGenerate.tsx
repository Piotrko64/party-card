import classes from "./buttonToGenerate.module.scss";
import { Link } from "react-router-dom";
import cx from "classnames";
import { useButtonToGenerate } from "./hooks/useButtonToGenerate";

export function ButtonToGenerate() {
    const { goToQRCode, t, isError, isLoading } = useButtonToGenerate();

    return (
        <>
            <h2> {t("generateTitle")} </h2>
            <p> {t("howGenerate")} </p>
            <button className={cx(classes.generate, "generate")} onClick={goToQRCode} disabled={isLoading}>
                {isLoading ? t("loading") : t("generateButton")}
            </button>
            {isError && <p className={classes.error}>{t("errorGenerate")}</p>}

            <h2 className={classes.localMode}>{t("localMode")}</h2>
            <p>{t("localDescription")}</p>
            <Link to="/localMode" className={classes.localModeButton}>
                {t("goToLocal")}
            </Link>
        </>
    );
}
