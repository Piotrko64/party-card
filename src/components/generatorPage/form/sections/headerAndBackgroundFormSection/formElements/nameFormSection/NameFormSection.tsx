import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { InputText } from "ui/form/inputText/InputText";

export function NameFormSection() {
    const { changeValueTextInput, name } = useHeaderSectionStore();

    return (
        <>
            {" "}
            {name.text}
            <InputText
                labelText="name"
                namePropertyToChange="name"
                callback={changeValueTextInput}
                valueInput={name.text}
                maxLength={40}
            />
        </>
    );
}
