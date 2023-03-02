import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";
import { InputText } from "ui/form/inputText/InputText";
import { ToggleActiveSection } from "../../toggleActiveSection/ToggleActiveSection";
import { GifSectionHeader } from "../gifSection/GifSection";

export function TextUnderName() {
    const { changeValueInput, textUnderName } = useHeaderSectionStore();

    return (
        <>
            <h3> Tekst pojawiający się pod imieniem oraz gif </h3>

            <ToggleActiveSection nameSection="textUnderName" isActive={textUnderName.isActive}>
                <InputText
                    labelText="Wpisz co tylko zechcesz"
                    namePropertyToChange="textUnderName"
                    callback={changeValueInput}
                    valueInput={textUnderName.text}
                    maxLength={100}
                    placeholder="Oczywiście możesz zostawić to miejsce puste"
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
