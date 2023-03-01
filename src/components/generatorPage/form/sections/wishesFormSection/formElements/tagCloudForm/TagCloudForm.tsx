import { ChangeEvent } from "react";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { TagCloudType } from "types/stores/WishesSectionStore";
import { OrdinaryColors } from "ui/form/inputColorSection/ordinaryColors/OrdinaryColors";

export function TagCloudForm({ color, id: idElement, texts }: TagCloudType) {
    const { changeWishValue, changeValueText, addTextInput, deleteTextInput } = useWishesSectionStore();

    function changeColorText(color: string) {
        changeWishValue("color", color, idElement);
    }

    function handleChangeValue(value: string, idText: string) {
        changeValueText(idElement, idText, value);
    }

    function addEmptyInput() {
        addTextInput(idElement);
    }

    return (
        <>
            <h3> Chmura życzeń </h3>

            <OrdinaryColors changeColor={changeColorText} selectedColor={color} />
            {texts.map((text) => (
                <div key={text.id}>
                    <input
                        value={text.content}
                        onChange={(event: ChangeEvent) =>
                            handleChangeValue((event.target as HTMLInputElement).value, text.id)
                        }
                    />
                    <button onClick={() => deleteTextInput(idElement, text.id)}> Usuń</button>
                </div>
            ))}
            <button onClick={addEmptyInput}> Dodaj nowe pole </button>
        </>
    );
}
