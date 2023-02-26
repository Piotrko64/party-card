import { PossiblePropertySectionToChange } from "types/stores/HeaderSection";
import { GradientColors } from "./gradientColors/GradientsColors";
import { OrdinaryColors } from "./ordinaryColors/OrdinaryColors";

type Props = {
    callback: (
        nameSection: PossiblePropertySectionToChange,
        newValue: string | boolean,
        lastProperty: "color" | "isGradient"
    ) => void;
    nameSection: PossiblePropertySectionToChange;
    thisColor: string;
    withoutGradient?: true;
};

export function InputColorSection({ callback, nameSection, thisColor, withoutGradient }: Props) {
    function handleChangeColor(newValue: string | boolean, isGradient?: true) {
        callback(nameSection, newValue, "color");
        isGradient ? callback(nameSection, true, "isGradient") : callback(nameSection, false, "isGradient");
    }

    return (
        <>
            <OrdinaryColors changeColor={handleChangeColor} selectedColor={thisColor} />

            {!withoutGradient && <GradientColors changeColor={handleChangeColor} selectedColor={thisColor} />}
        </>
    );
}
