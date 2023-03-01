import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { TagCloudType } from "types/stores/WishesSectionStore";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";
import { OrdinaryColors } from "ui/form/inputColorSection/ordinaryColors/OrdinaryColors";

export function TagCloudForm({ color, id, texts }: TagCloudType) {
    const { changeWishValue } = useWishesSectionStore();

    function changeColorText(color: string) {
        changeWishValue("color", color, id);
    }

    return (
        <>
            <h3> Chmura życzeń </h3>

            <OrdinaryColors changeColor={changeColorText} selectedColor={color} />
            {texts}
        </>
    );
}
