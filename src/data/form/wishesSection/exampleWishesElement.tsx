import { UnionWishElementsWithTexts } from "types/stores/WishesSectionStore";
import { v4 as uuidv4 } from "uuid";

export const exampleWishElements: Array<UnionWishElementsWithTexts> = [
    {
        name: "tagCloud",
        texts: [
            { id: uuidv4(), content: "123" },
            { id: uuidv4(), content: "___" },
        ],
        color: "black",
        font: "Oswald",
        id: "test",
    },
    {
        name: "tagCloud",
        texts: [{ id: uuidv4(), content: "456" }],
        color: "black",
        font: "Oswald",
        id: "test2",
    },
];
