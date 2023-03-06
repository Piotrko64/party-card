import { useGenerateCard } from "./hooks/useGenerateCard";
import classes from "./buttonToGenerate.module.scss";
import { v4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import cx from "classnames";
import { useTranslation } from "react-i18next";

export function ButtonToGenerate() {
    const generate = useGenerateCard();
    const navigate = useNavigate();
    const { t } = useTranslation("generate");
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);

    async function goToQRCode() {
        const id = v4();

        try {
            setError(false);
            setLoading(true);

            await generate(id);
            navigate("/qrCode/" + id);
        } catch (err) {
            setLoading(false);
            setError(true);
        }
    }

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
