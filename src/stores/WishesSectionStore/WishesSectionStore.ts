import produce from "immer";
import {
    UnionWishElements,
    UnionWishElementsWithTexts,
    WishesSectionStore,
} from "types/stores/WishesSectionStore";
import { create } from "zustand";
import { v4 } from "uuid";
import { clone } from "lodash";

export const useWishesSectionStore = create<WishesSectionStore>((set) => ({
    elements: [],

    changeWishValue: (nameProperty: string, newValue: string | Array<string>, id: string) =>
        set(
            produce((state) => {
                const elementToChange = state.elements.find(
                    (element: UnionWishElements) => element.id === id
                );
                elementToChange[nameProperty] = newValue;
            })
        ),

    changeValueText: (idComponent: string, textId: string, newValue: string) =>
        set(
            produce((state: WishesSectionStore) => {
                const findComponent = state.elements.find((element) => element.id === idComponent);
                const findText = (findComponent as UnionWishElementsWithTexts)?.texts.find(
                    (text) => text.id === textId
                );
                if (findText) {
                    findText.content = newValue;
                }
            })
        ),

    moveSingleInputElement: (idElement: string, sourceIndex: number, destinationIndex: number) =>
        set(
            produce((state: WishesSectionStore) => {
                const cloneArrayElement = clone(state.elements);

                const thisWishElement = cloneArrayElement.find(
                    (element) => element.id === idElement
                ) as UnionWishElementsWithTexts;

                const texts = (thisWishElement as UnionWishElementsWithTexts).texts;
                const findSingleInput = texts.find((_text, index) => index === sourceIndex)!;

                texts.splice(sourceIndex, 1);

                texts.splice(destinationIndex, 0, findSingleInput);

                state.elements = cloneArrayElement;
            })
        ),

    addTextInput: (idComponent: string) =>
        set(
            produce((state: WishesSectionStore) => {
                const findComponent = state.elements.find(
                    (element) => element.id === idComponent
                ) as UnionWishElementsWithTexts;
                if (findComponent) findComponent.texts = [{ id: v4(), content: "" }, ...findComponent.texts];
            })
        ),

    changePropertyValue(newValue: string | boolean, idComponent: string, nameProperty: string) {
        set(
            produce((state: WishesSectionStore) => {
                const findComponent = state.elements.find((element) => element.id === idComponent);

                if (findComponent) {
                    //@ts-ignore
                    findComponent[nameProperty] = newValue;
                }
            })
        );
    },

    deleteTextInput: (idComponent: string, idText: string) =>
        set(
            produce((state: WishesSectionStore) => {
                const findComponent = state.elements.find(
                    (element) => element.id === idComponent
                ) as UnionWishElementsWithTexts;
                if (findComponent) {
                    const newArrayText = [...findComponent.texts];
                    const indexText = newArrayText.findIndex((text) => text.id === idText);
                    newArrayText.splice(indexText, 1);

                    findComponent.texts = newArrayText;
                }
            })
        ),

    setWishesElements: (newElements: Array<UnionWishElements>) => {
        set(
            produce((state: WishesSectionStore) => {
                state.elements = newElements;
            })
        );
    },

    deleteElement: (id: string) => {
        set(
            produce((state) => {
                state.elements = state.elements.filter((element: UnionWishElements) => element.id !== id);
            })
        );
    },

    addElementWish: (obj: UnionWishElements) =>
        set(
            produce((state) => {
                if (state.elements.length >= 20) return;
                state.elements = [obj, ...state.elements];
            })
        ),
}));
