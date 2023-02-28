import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { useHeaderSectionStore } from "./../../../../../../../stores/HeaderSectionStore/HeaderSectionStore";

export function SupriseCardForm() {
    const {} = useHeaderSectionStore((state) => state.supriseCard);

    return (
        <>
            <h3> Kartka niespodzianka </h3>
            <TextWithToggleButton text="Czy kartka niespodzianka ma być dostępna?" />
        </>
    );
}
