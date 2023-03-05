import { PossiblePropertySectionToChange } from "types/stores/HeaderSection";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { OrdinaryColors } from "../ordinaryColors/OrdinaryColors";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation("generate");

    return (
        <div>
            <h4> {t("stroke")} </h4>
            <div>
                <TextWithToggleButton
                    callback={(isCheck: boolean) => callback("name", isCheck, "isStrokeColor")}
                    isChecked={isStroke}
                    text={t("isStroke")}
                />

                {isStroke && (
                    <>
                        <h5> {t("strokeColor")}</h5>

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
