import { useTranslation } from "react-i18next";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";
import { StrokeManage } from "ui/form/inputColorSection/strokeManage/StrokeManage";
import { InputText } from "ui/form/inputText/InputText";

const MAX_INPUT_LENGTH = 40;

export function NameFormSection() {
    const { changeValueInput, name } = useHeaderSectionStore();
    const { t } = useTranslation("generate");

    return (
        <>
            <h3 className="name"> {t("name")} </h3>
            <InputText
                namePropertyToChange="name"
                callbackToChangeValueText={changeValueInput}
                valueInput={name.text}
                maxLength={MAX_INPUT_LENGTH}
                placeholder={t("name")!}
            />
            <FontChoosingPanel
                callbackToSelectFont={changeValueInput}
                nameSection={"name"}
                font={name.font}
                isHeader
            />
            <InputColorSection
                callbackToChangeColor={changeValueInput}
                nameSection={"name"}
                thisColor={name.color}
            />
            <StrokeManage
                changeStrokeProperty={changeValueInput}
                isStroke={name.isStrokeColor}
                selectedColor={name.strokeColor}
            />
        </>
    );
}
