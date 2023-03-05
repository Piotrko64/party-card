import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { DropResult } from "@hello-pangea/dnd";
import { useTranslation } from "react-i18next";

export function useWishesFormSectionManage() {
    const { deleteElement, setWishesElements, elements } = useWishesSectionStore();
    const wishElements = useWishesSectionStore((store) => store.elements);
    const [parent, enableAnimations] = useAutoAnimate();

    const { t } = useTranslation("ui");
    function dragElement(result: DropResult) {
        enableAnimations(false);
        if (!result.destination) return;

        const cloneArrayElement = [...elements];
        const [chooseElement] = cloneArrayElement.splice(result.source.index, 1);
        cloneArrayElement.splice(result.destination.index, 0, chooseElement);

        setWishesElements(cloneArrayElement);
    }

    function deleteSection(id: string) {
        enableAnimations(true);
        deleteElement(id);
    }

    function afterDropElement() {
        enableAnimations(true);
    }

    return {
        afterDropElement,
        deleteSection,
        dragElement,
        t,
        parent,
        wishElements,
    };
}
