import { fontsToChoice } from "data/fonts/fontsToChoice";

import { NamesFont } from "types/typesForStyles/NamesFont";
import classes from "./fontChoosingPanel.module.scss";
import cx from "classnames";

type Props = {
    callback: (nameSection: string, newValue: NamesFont, lastProperty: "font") => void;
    nameSection: string;
    font: NamesFont;
    isHeader?: true;
};

export function FontChoosingPanel({ callback, nameSection, font, isHeader }: Props) {
    return (
        <>
            {isHeader && <h4> Dobierz odpowiednią czcionkę i kolor! </h4>}
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
