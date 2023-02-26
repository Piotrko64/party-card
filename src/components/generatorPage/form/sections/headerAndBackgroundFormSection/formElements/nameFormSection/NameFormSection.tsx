import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { InputText } from "ui/form/inputText/InputText";

export function NameFormSection() {
    const { changeValueTextInput, name } = useHeaderSectionStore();

    return (
        <>
            <InputText
                labelText="name"
                namePropertyToChange="name"
                callback={changeValueTextInput}
                valueInput={name.text}
                maxLength={40}
            />
            <FontChoosingPanel callback={changeValueTextInput} nameSection={"name"} />
        </>
    );
}
