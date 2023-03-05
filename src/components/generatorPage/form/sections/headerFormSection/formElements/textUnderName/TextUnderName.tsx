import { useTranslation } from "react-i18next";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";
import { InputText } from "ui/form/inputText/InputText";
import { ToggleActiveSection } from "../../toggleActiveSection/ToggleActiveSection";
import { GifSectionHeader } from "../gifSection/GifSection";

export function TextUnderName() {
    const { changeValueInput, textUnderName } = useHeaderSectionStore();

    const { t } = useTranslation("generate");

    return (
        <>
            <h3> {t("underName")} </h3>

            <ToggleActiveSection nameSection="textUnderName" isActive={textUnderName.isActive}>
                <InputText
                    namePropertyToChange="textUnderName"
                    callback={changeValueInput}
                    valueInput={textUnderName.text}
                    maxLength={300}
                />
                <FontChoosingPanel
                    callback={changeValueInput}
                    nameSection={"textUnderName"}
                    font={textUnderName.font}
                />
                <InputColorSection
                    callback={changeValueInput}
                    nameSection={"textUnderName"}
                    thisColor={textUnderName.color}
                />
                <GifSectionHeader />
            </ToggleActiveSection>
        </>
    );
}
