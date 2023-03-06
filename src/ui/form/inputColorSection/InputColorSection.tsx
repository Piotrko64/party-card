import { GradientColors } from "./gradientColors/GradientsColors";
import { OrdinaryColors } from "./ordinaryColors/OrdinaryColors";

type Props = {
    callbackToChangeColor: (
        nameSection: string,
        newValue: string | boolean,
        lastProperty: "color" | "isGradient" | "backgroundColor"
    ) => void;
    nameSection: string;
    thisColor: string;
    withoutGradient?: true;
    backgroundColorCase?: true;
};

export function InputColorSection({
    callbackToChangeColor,
    nameSection,
    thisColor,
    withoutGradient,
    backgroundColorCase,
}: Props) {
    function handleChangeColor(newValue: string | boolean, isGradient?: true) {
        callbackToChangeColor(nameSection, newValue, backgroundColorCase ? "backgroundColor" : "color");
        callbackToChangeColor(nameSection, !!isGradient, "isGradient");
    }

    return (
        <>
            <OrdinaryColors changeColor={handleChangeColor} selectedColor={thisColor} />

            {!withoutGradient && <GradientColors changeColor={handleChangeColor} selectedColor={thisColor} />}
        </>
    );
}
