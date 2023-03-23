import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";
import { InputText } from "ui/form/inputText/InputText";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { ToggleActiveSection } from "../../toggleActiveSection/ToggleActiveSection";
import { useTranslation } from "react-i18next";

const MAX_INPUT_LENGTH = 300;

export function SupriseCardForm() {
    const { isActive, color, backgroundColor, font, text } = useHeaderSectionStore(
        (state) => state.supriseCard
    );

    const { changeValueInput } = useHeaderSectionStore();
    const { t } = useTranslation("generate");

    return (
        <div data-testid="supriseCard">
            <h3> {t("supriseCard")} </h3>
            <ToggleActiveSection nameSection="supriseCard" isActive={isActive}>
                <>
                    <InputText
                        callbackToChangeValueText={changeValueInput}
                        valueInput={text}
                        namePropertyToChange="supriseCard"
                        maxLength={MAX_INPUT_LENGTH}
                        placeholder={t("write")!}
                    />
                    <FontChoosingPanel
                        callbackToSelectFont={changeValueInput}
                        font={font}
                        nameSection="supriseCard"
                    />

                    <h4> {t("textColor")} </h4>

                    <InputColorSection
                        withoutGradient
                        thisColor={color}
                        nameSection="supriseCard"
                        callbackToChangeColor={changeValueInput}
                    />

                    <h4> {t("backColor")} </h4>

                    <InputColorSection
                        withoutGradient
                        thisColor={backgroundColor}
                        nameSection="supriseCard"
                        callbackToChangeColor={changeValueInput}
                        backgroundColorCase
                    />
                </>
            </ToggleActiveSection>
        </div>
    );
}
