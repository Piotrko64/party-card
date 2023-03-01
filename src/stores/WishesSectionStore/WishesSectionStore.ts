import produce from "immer";
import { UnionWishElements, WishesSectionStore } from "types/stores/WishesSectionStore";
import { create } from "zustand";
import { v4 } from "uuid";

export const useWishesSectionStore = create<WishesSectionStore>((set) => ({
    elements: [
        {
            name: "tagCloud",
            id: "abc",
            texts: [
                { id: v4(), content: "🎉" },

                { id: v4(), content: "🥳" },

                { id: v4(), content: "🎉" },

                { id: v4(), content: "🥳" },

                { id: v4(), content: "🎉" },

                { id: v4(), content: "🥳" },

                { id: v4(), content: "🎉" },
            ],
            color: "red",
            font: "Oswald",
        },
        {
            name: "wishWall",
            id: "abcwall",
            texts: [
                { id: v4(), content: "🎉" },

                { id: v4(), content: "🥳" },

                { id: v4(), content: "🎉" },

                { id: v4(), content: "🥳" },

                { id: v4(), content: "🎉" },

                { id: v4(), content: "🥳" },

                { id: v4(), content: "🎉" },
            ],
            color: "red",
            font: "Jost",
        },
        {
            name: "tagCloud",
            id: "abc1",
            texts: [
                { id: v4(), content: "🎉" },

                { id: v4(), content: "🎉" },
            ],
            color: "blue",
            font: "Jost",
        },
    ],

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
                const findText = findComponent?.texts.find((text) => text.id === textId);
                if (findText) {
                    findText.content = newValue;
                }
            })
        ),

    addTextInput: (idComponent: string) =>
        set(
            produce((state: WishesSectionStore) => {
                const findComponent = state.elements.find((element) => element.id === idComponent);
                if (findComponent) findComponent.texts = [{ id: v4(), content: "" }, ...findComponent.texts];
            })
        ),

    deleteTextInput: (idComponent: string, idText: string) =>
        set(
            produce((state: WishesSectionStore) => {
                const findComponent = state.elements.find((element) => element.id === idComponent);
                if (findComponent) {
                    const newArrayText = [...findComponent.texts];
                    const indexText = newArrayText.findIndex((text) => text.id === idText);
                    newArrayText.splice(indexText, 1);
                    console.log(newArrayText, indexText);
                    findComponent.texts = newArrayText;
                }
            })
        ),

    addElementWish: (obj: UnionWishElements) =>
        set(
            produce((state) => {
                state.elements = [obj, ...state.elements];
            })
        ),
}));
