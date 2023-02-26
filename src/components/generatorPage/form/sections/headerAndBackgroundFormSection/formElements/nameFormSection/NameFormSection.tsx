import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";
import { InputText } from "ui/form/inputText/InputText";

export function NameFormSection() {
    const { changeValueInput, name } = useHeaderSectionStore();

    return (
        <>
            <InputText
                labelText="name"
                namePropertyToChange="name"
                callback={changeValueInput}
                valueInput={name.text}
                maxLength={40}
            />
            <FontChoosingPanel callback={changeValueInput} nameSection={"name"} />
            <InputColorSection callback={changeValueInput} nameSection={"name"} />
        </>
    );
}
