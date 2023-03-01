import { fontsToChoice } from "data/fonts/fontsToChoice";
import { PossiblePropertySectionToChange } from "types/stores/HeaderSection";
import { NamesFont } from "types/typesForStyles/NamesFont";
import classes from "./fontChoosingPanel.module.scss";
import cx from "classnames";

type Props = {
    callback: (nameSection: string, newValue: NamesFont, lastProperty: "font") => void;
    nameSection: string;
    font: NamesFont;
};

export function FontChoosingPanel({ callback, nameSection, font }: Props) {
    return (
        <>
            <h4> Dobierz odpowiednią czcionkę i kolor dla niej! </h4>
            <div className={classes.fonts}>
                {fontsToChoice.map(({ fullName, name }) => (
                    <div
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
