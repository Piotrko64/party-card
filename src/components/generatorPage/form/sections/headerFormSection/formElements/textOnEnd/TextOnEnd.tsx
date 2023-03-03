import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";
import { InputText } from "ui/form/inputText/InputText";
import { ToggleActiveSection } from "../../toggleActiveSection/ToggleActiveSection";

export function TextOnEnd() {
    const { changeValueInput, endText } = useHeaderSectionStore();

    return (
        <>
            <h3> Tekst na samym dole sekcji głównej </h3>
            <ToggleActiveSection nameSection="endText" isActive={endText.isActive}>
                <InputText
                    labelText="Możesz wymyślić tekst wprowadzający do sekcji z życzeniami"
                    namePropertyToChange="endText"
                    callback={changeValueInput}
                    valueInput={endText.text}
                    maxLength={80}
                    placeholder=""
                />

                <FontChoosingPanel callback={changeValueInput} nameSection={"endText"} font={endText.font} />

                <InputColorSection
                    callback={changeValueInput}
                    nameSection={"endText"}
                    thisColor={endText.color}
                    withoutGradient
                />
            </ToggleActiveSection>
        </>
    );
}
