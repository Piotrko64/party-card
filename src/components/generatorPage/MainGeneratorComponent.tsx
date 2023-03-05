import { useTranslation } from "react-i18next";
import { PreviewButton } from "ui/form/inputText/buttons/previewButton/PreviewButton";
import { HomeLink } from "ui/homeLink/HomeLink";
import { MainForm } from "./form/MainForm";
import classes from "./mainGeneratorComponent.module.scss";

export function MainGeneratorComponent() {
    const { t } = useTranslation("generate");

    return (
        <div className={classes.container}>
            <div className={classes.generator}>
                <HomeLink />
                <h1> {t("mainTitle")} 🥳</h1>
                <MainForm />
            </div>

            <PreviewButton />
        </div>
    );
}
