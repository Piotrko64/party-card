import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { useBackgroundStore } from "./../../../../../../../stores/BackgroundStore/BackgroundStore";
import { ChangeEvent } from "react";
import { ListDecorations } from "./listDecorations/ListDecorations";

export function DecorationPanel() {
    const { backgroundDecorations: decorations, changeValue } = useBackgroundStore();

    function toggleDecorations() {
        changeValue("backgroundDecorations", !decorations.isDecorations, "isDecorations");
    }

    return (
        <>
            <h3> Dodatkowe dekoracje w tle </h3>
            <TextWithToggleButton
                text="Dodać dekoracje w tle? "
                callback={toggleDecorations}
                isChecked={decorations.isDecorations}
            />
            <ListDecorations />
        </>
    );
}
