import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";
import { StrokeManage } from "ui/form/inputColorSection/strokeManage/StrokeManage";
import { InputText } from "ui/form/inputText/InputText";

export function NameFormSection() {
    const { changeValueInput, name } = useHeaderSectionStore();

    return (
        <>
            <h2> Imię Jubilata </h2>
            <InputText
                labelText="name"
                namePropertyToChange="name"
                callback={changeValueInput}
                valueInput={name.text}
                maxLength={40}
            />
            <FontChoosingPanel callback={changeValueInput} nameSection={"name"} font={name.font} />
            <InputColorSection callback={changeValueInput} nameSection={"name"} thisColor={name.color} />
            <StrokeManage
                callback={changeValueInput}
                isStroke={name.isStrokeColor}
                selectedColor={name.strokeColor}
            />
        </>
    );
}
