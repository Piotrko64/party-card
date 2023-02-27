import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { GradientColors } from "./gradientColors/GradientsColors";
import { OrdinaryColors } from "./ordinaryColors/OrdinaryColors";

type Props = {
    callback: (nameSection: string, newValue: string | boolean, lastProperty: "color" | "isGradient") => void;
    nameSection: string;
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
