import { PossiblePropertySectionToChange } from "types/stores/HeaderSection";
import { GradientColors } from "./gradientColors/GradientsColors";
import { OrdinaryColors } from "./ordinaryColors/OrdinaryColors";
import { StrokeManage } from "./strokeManage/StrokeManage";

type Props = {
    callback: (
        nameSection: PossiblePropertySectionToChange,
        newValue: string | boolean,
        lastProperty: "color" | "isGradient"
    ) => void;
    nameSection: PossiblePropertySectionToChange;
};

export function InputColorSection({ callback, nameSection }: Props) {
    function handleChangeColor(newValue: string | boolean, isGradient?: true) {
        callback(nameSection, newValue, "color");
        isGradient ? callback(nameSection, true, "isGradient") : callback(nameSection, false, "isGradient");
    }

    return (
        <>
            <OrdinaryColors changeColor={handleChangeColor} />

            <GradientColors changeColor={handleChangeColor} />
            <StrokeManage />
        </>
    );
}
