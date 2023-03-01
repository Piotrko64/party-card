import produce from "immer";
import { UnionWishElements, WishesSectionStore } from "types/stores/WishesSectionStore";
import { create } from "zustand";

export const useWishesSectionStore = create<WishesSectionStore>((set) => ({
    elements: [
        {
            name: "tagCloud",
            id: "abc",
            texts: ["🎉", "🥳", "🎉", "🥳", "🎉", "🥳", "🎉", "🥳", "🎉"],
            color: "red",
            font: "Oswald",
        },
        {
            name: "wishWall",
            id: "abcwall",
            wishes: ["Wszystkiego dobrego", "najlepszego", "jesteś wielki!"],
            color: "red",
            font: "Jost",
        },
        {
            name: "tagCloud",
            id: "abc1",
            texts: ["🎉", "🥳", "🎉", "🥳", "🎉", "🥳", "🎉", "Siemankoooo", "🎉"],
            color: "blue",
            font: "Jost",
        },
    ],

    addElementWish: (obj: UnionWishElements) =>
        set(
            produce((state) => {
                state.elements = [obj, ...state.elements];
            })
        ),
}));
