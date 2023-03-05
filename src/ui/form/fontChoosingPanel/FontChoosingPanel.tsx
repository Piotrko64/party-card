import { fontsToChoice } from "data/fonts/fontsToChoice";
import { NamesFont } from "types/typesForStyles/NamesFont";
import classes from "./fontChoosingPanel.module.scss";
import cx from "classnames";
import { useTranslation } from "react-i18next";

type Props = {
    callback: (nameSection: string, newValue: NamesFont, lastProperty: "font") => void;
    nameSection: string;
    font: NamesFont;
    isHeader?: true;
};

export function FontChoosingPanel({ callback, nameSection, font, isHeader }: Props) {
    const { t } = useTranslation("ui");

    return (
        <>
            {isHeader && <h4> {t("fonts")} </h4>}
            <div className={classes.fonts}>
                {fontsToChoice.map(({ fullName, name }) => (
                    <div
                        key={name}
                        className={cx(classes.font, font === name && classes.thisFont)}
                        style={{ fontFamily: fullName }}
                        onClick={() => callback(nameSection, name, "font")}
                    >
                        {name}
                    </div>
                ))}
            </div>
        </>
    );
}
