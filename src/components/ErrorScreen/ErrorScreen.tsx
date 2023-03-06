import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classes from "./errorScreen.module.scss";

export function ErrorScreen() {
    const { t, i18n } = useTranslation("errorScreen");
    console.log(t("goWrong"), i18n.language, t("goToHome"));
    return (
        <>
            <div className={classes.screen}>
                <h1>Oops..!!</h1>
                <h2>{t("goWrong")} </h2>

                <div className={classes.links}>
                    <Link to="/" className={classes.home}>
                        {" "}
                        {t("goToHome")}
                    </Link>
                    <Link to="/generateCard" className={classes.generate}>
                        {" "}
                        {t("goToGenerator")}{" "}
                    </Link>
                </div>
            </div>
        </>
    );
}
