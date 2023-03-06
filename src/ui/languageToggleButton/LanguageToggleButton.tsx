import { useTranslation } from "react-i18next";
import classes from "./languageToggleButton.module.scss";
import cx from "classnames";

export function LanguageToggleButton() {
    const { i18n } = useTranslation();

    const langButtons = ["pl", "en"] as const;

    function changeLanguage(lang: "en" | "pl") {
        i18n.changeLanguage(lang);
    }

    return (
        <div className={classes.container}>
            {langButtons.map((lang) => (
                <button
                    className={cx(classes.button, i18n.language.includes(lang) && classes.selected)}
                    onClick={() => changeLanguage(lang)}
                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
