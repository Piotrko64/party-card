import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";
import { InputText } from "ui/form/inputText/InputText";

export function TextOnEnd() {
    const { changeValueInput, endText } = useHeaderSectionStore();

    return (
        <>
            <h3> Tekst pojawiający się na samym dole sekcji głównej </h3>

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
        </>
    );
}
