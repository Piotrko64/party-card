import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";
import { InputText } from "ui/form/inputText/InputText";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { ToggleActiveSection } from "../../toggleActiveSection/ToggleActiveSection";
import { useTranslation } from "react-i18next";

export function SupriseCardForm() {
    const { isActive, color, backgroundColor, font, text } = useHeaderSectionStore(
        (state) => state.supriseCard
    );

    const { changeValueInput } = useHeaderSectionStore();
    const { t } = useTranslation("generate");

    return (
        <>
            <h3> {t("supriseCard")} </h3>
            <ToggleActiveSection nameSection="supriseCard" isActive={isActive}>
                <>
                    <InputText
                        callback={changeValueInput}
                        valueInput={text}
                        namePropertyToChange="supriseCard"
                        maxLength={300}
                        placeholder={t("write")!}
                    />
                    <FontChoosingPanel callback={changeValueInput} font={font} nameSection="supriseCard" />

                    <h4> {t("textColor")} </h4>

                    <InputColorSection
                        withoutGradient
                        thisColor={color}
                        nameSection="supriseCard"
                        callback={changeValueInput}
                    />

                    <h4> {t("backColor")} </h4>

                    <InputColorSection
                        withoutGradient
                        thisColor={backgroundColor}
                        nameSection="supriseCard"
                        callback={changeValueInput}
                        backgroundColorCase
                    />
                </>
            </ToggleActiveSection>
        </>
    );
}
