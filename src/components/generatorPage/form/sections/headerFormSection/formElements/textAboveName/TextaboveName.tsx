import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";
import { InputText } from "ui/form/inputText/InputText";

export function TextAboveName() {
    const { changeValueInput, textAboveName } = useHeaderSectionStore();

    return (
        <>
            <h3> Tekst pojawiający się nad imieniem </h3>

            <InputText
                labelText="Wymyśl jakiś tekst"
                namePropertyToChange="textAboveName"
                callback={changeValueInput}
                valueInput={textAboveName.text}
                maxLength={120}
                placeholder="Może 'Wszystkiego najlepszego' "
            />
            <FontChoosingPanel
                callback={changeValueInput}
                nameSection={"textAboveName"}
                font={textAboveName.font}
            />
            <InputColorSection
                callback={changeValueInput}
                nameSection={"textAboveName"}
                thisColor={textAboveName.color}
            />
        </>
    );
}
