import { PossiblePropertySectionToChange } from "types/stores/HeaderSection";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { OrdinaryColors } from "../ordinaryColors/OrdinaryColors";
import { useTranslation } from "react-i18next";

type Props = {
    changeStrokeProperty: (
        nameSection: PossiblePropertySectionToChange,
        newValue: string | boolean,
        lastProperty: "strokeColor" | "isStrokeColor"
    ) => void;
    isStroke: boolean;
    selectedColor: string;
};

export function StrokeManage({ changeStrokeProperty, isStroke, selectedColor }: Props) {
    const { t } = useTranslation("generate");

    function toggleStroke() {
        changeStrokeProperty("name", !isStroke, "isStrokeColor");
    }

    return (
        <div>
            <h4> {t("stroke")} </h4>
            <div>
                <TextWithToggleButton
                    callbackToToggle={toggleStroke}
                    isChecked={isStroke}
                    text={t("isStroke")}
                />

                {isStroke && (
                    <>
                        <h5> {t("strokeColor")}</h5>

                        <OrdinaryColors
                            selectedColor={selectedColor}
                            withoutLabel
                            changeColor={(value) => changeStrokeProperty("name", value, "strokeColor")}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
