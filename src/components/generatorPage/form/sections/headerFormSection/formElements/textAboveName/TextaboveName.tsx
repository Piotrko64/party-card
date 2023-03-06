import { useTranslation } from "react-i18next";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";
import { InputText } from "ui/form/inputText/InputText";
import { ToggleActiveSection } from "../../toggleActiveSection/ToggleActiveSection";

const MAX_LENGTH_INPUT = 40;

export function TextAboveName() {
    const { changeValueInput, textAboveName } = useHeaderSectionStore();
    const { t } = useTranslation("generate");

    return (
        <>
            <h3> {t("aboveName")} </h3>

            <ToggleActiveSection nameSection="textAboveName" isActive={textAboveName.isActive}>
                <div>
                    <InputText
                        labelText="Wymyśl jakiś tekst"
                        namePropertyToChange="textAboveName"
                        callbackToChangeValueText={changeValueInput}
                        valueInput={textAboveName.text}
                        maxLength={MAX_LENGTH_INPUT}
                        placeholder="Może 'Wszystkiego najlepszego' "
                    />
                    <FontChoosingPanel
                        callbackToSelectFont={changeValueInput}
                        nameSection={"textAboveName"}
                        font={textAboveName.font}
                    />
                    <InputColorSection
                        callbackToChangeColor={changeValueInput}
                        nameSection={"textAboveName"}
                        thisColor={textAboveName.color}
                    />
                </div>
            </ToggleActiveSection>
        </>
    );
}
