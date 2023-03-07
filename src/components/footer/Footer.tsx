import { Link } from "react-router-dom";
import classes from "./footer.module.scss";
import { useTranslation } from "react-i18next";

export function Footer() {
    const { t, i18n } = useTranslation("footer");

    function toggleLanguage() {
        i18n.changeLanguage(i18n.language.includes("pl") ? "en" : "pl-PL");
    }

    return (
        <footer className={classes.footer}>
            <div className={classes.party}>PARTY CARD </div>
            <div className={classes.links}>
                <Link to="/"> {t("goToMain")}</Link>
                <Link to="/generateCard"> {t("goToGenerator")}</Link>
                <Link to="/examples/2"> {t("goToExamples")}</Link>

                <div onClick={toggleLanguage}> Przełącz język / Switch language</div>
            </div>
            <div className={classes.linkToPortfolio}>
                <p>
                    {t("realization")} <br></br>
                    <a href="http://piotrkolodziejczyk.vercel.app" target="_blank">
                        Piotr Kołodziejczyk
                    </a>
                </p>
                <img src="/logoPK.png" alt="logo" />
            </div>
        </footer>
    );
}
