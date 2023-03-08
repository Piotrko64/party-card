import { useAutoAnimate } from "@formkit/auto-animate/react";
import { DropResult } from "@hello-pangea/dnd";
import { useTranslation } from "react-i18next";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";

export function useListInputElement(idElement: string) {
    const { changeValueText, deleteTextInput, addTextInput, moveSingleInputElement } =
        useWishesSectionStore();
    const [parent, enableAnimations] = useAutoAnimate();

    const { t } = useTranslation("generate");

    function handleChangeValue(value: string, idText: string) {
        changeValueText(idElement, idText, value);
    }

    function deleteElement(textId: string) {
        enableAnimations(true);
        deleteTextInput(idElement, textId);
    }

    function addEmptyInput() {
        addTextInput(idElement);
        enableAnimations(true);
    }

    function dragSingleInput(result: DropResult) {
        if (!result.destination) return;
        enableAnimations(false);
        moveSingleInputElement(idElement, result.source.index, result.destination.index);
    }

    return { dragSingleInput, addEmptyInput, deleteElement, handleChangeValue, t, parent };
}
