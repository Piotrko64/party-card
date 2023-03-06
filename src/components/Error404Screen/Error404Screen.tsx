import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import classes from "./error404Screen.module.scss";

const TIME_TO_REDIRECT = 7500;

export function Error404Screen() {
    const navigate = useNavigate();
    const { t } = useTranslation("page404");

    useEffect(() => {
        let timer = setTimeout(() => {
            navigate("/");
        }, TIME_TO_REDIRECT);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className={classes.screen}>
            <h1>404</h1>
            <h2> {t("notFound")} </h2>
            <p>
                {" "}
                <Link to="/"> {t("click")}</Link> {t("wait")}
            </p>
        </div>
    );
}
