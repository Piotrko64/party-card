import { PossiblePropertySectionToChange } from "types/stores/HeaderSection";
import { OrdinaryColors } from "../ordinaryColors/OrdinaryColors";
import { ToggleButton } from "./../../toggleButton/ToggleButton";

type Props = {
    callback: (
        nameSection: PossiblePropertySectionToChange,
        newValue: string | boolean,
        lastProperty: "strokeColor" | "isStrokeColor"
    ) => void;
    isStroke?: boolean;
    selectedColor: string;
};

export function StrokeManage({ callback, isStroke, selectedColor }: Props) {
    return (
        <div>
            <h3> Obrys </h3>
            <div>
                <div>
                    Czy zastosować kolorowy obrys?
                    <ToggleButton
                        onChecked={(isCheck: boolean) => callback("name", isCheck, "isStrokeColor")}
                    />
                </div>

                {isStroke && (
                    <>
                        <h5> Wybierz kolor dla obrysu</h5>

                        <OrdinaryColors
                            selectedColor={selectedColor}
                            withoutLabel
                            changeColor={(value) => callback("name", value, "strokeColor")}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
