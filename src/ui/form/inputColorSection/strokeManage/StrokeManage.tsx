import { PossiblePropertySectionToChange } from "types/stores/HeaderSection";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { OrdinaryColors } from "../ordinaryColors/OrdinaryColors";

type Props = {
    callback: (
        nameSection: PossiblePropertySectionToChange,
        newValue: string | boolean,
        lastProperty: "strokeColor" | "isStrokeColor"
    ) => void;
    isStroke: boolean;
    selectedColor: string;
};

export function StrokeManage({ callback, isStroke, selectedColor }: Props) {
    return (
        <div>
            <h4> Obrys </h4>
            <div>
                <TextWithToggleButton
                    callback={(isCheck: boolean) => callback("name", isCheck, "isStrokeColor")}
                    isChecked={isStroke}
                    text="Czy zastosować kolorowy obrys?"
                />

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
