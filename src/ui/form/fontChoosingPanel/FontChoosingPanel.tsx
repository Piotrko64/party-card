import { fontsToChoice } from "data/fonts/fontsToChoice";
import { PossiblePropertySectionToChange } from "types/stores/HeaderSection";
import { NamesFont } from "types/typesForStyles/NamesFont";

type Props = {
    callback: (
        nameSection: PossiblePropertySectionToChange,
        newValue: NamesFont,
        lastProperty: "font"
    ) => void;
    nameSection: PossiblePropertySectionToChange;
};

export function FontChoosingPanel({ callback, nameSection }: Props) {
    return (
        <div>
            {fontsToChoice.map(({ fullName, name }) => (
                <div style={{ fontFamily: fullName }} onClick={() => callback(nameSection, name, "font")}>
                    {name}
                </div>
            ))}
        </div>
    );
}
