import { WishesSectionStore } from "types/stores/WishesSectionStore";
import { create } from "zustand";

export const useWishesSectionStore = create<WishesSectionStore>((set) => ({
    elements: [
        {
            name: "tagCloud",
            id: "abc",
            texts: ["aaaa", "bbbb", "cccc", "dddd"],
            color: "red",
            font: "Oswald",
        },
    ],
}));
