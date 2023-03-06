import { fontsToChoice } from "data/fonts/fontsToChoice";
import { NamesFont } from "types/typesForStyles/NamesFont";
import classes from "./fontChoosingPanel.module.scss";
import cx from "classnames";
import { useTranslation } from "react-i18next";

type Props = {
    callbackToSelectFont: (nameSection: string, newValue: NamesFont, lastProperty: "font") => void;
    nameSection: string;
    font: NamesFont;
    isHeader?: true;
};

export function FontChoosingPanel({ callbackToSelectFont, nameSection, font, isHeader }: Props) {
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
                        onClick={() => callbackToSelectFont(nameSection, name, "font")}
                    >
                        {name}
                    </div>
                ))}
            </div>
        </>
    );
}
