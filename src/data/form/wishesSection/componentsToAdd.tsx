import { UnionWishElements } from "types/stores/WishesSectionStore";
import { v4 as uuidv4 } from "uuid";

export const componentsToAdd = [
    {
        title: "tagCloud",
        componentObject: {
            name: "tagCloud",
            texts: ["😄"],
            color: "black",
            font: "Oswald",
            id: uuidv4(),
        },
        plName: "Chmura słów",
        enName: "Tag Cloud",
    },
    {
        title: "wishWall",
        componentObject: {
            id: uuidv4(),
            name: "wishWall",
            wishes: ["❤️"],
            color: "black",
            font: "Jost",
        },
        plName: "Ściana życzeń",
        enName: "Wish Wall",
    },
    {
        title: "imageURL",
        componentObject: {
            id: uuidv4(),
            name: "imageURL",
            isBorder: false,
            backgroundColor: "white",
            url: "",
        },
        plName: "Zdjęcie ( z adresu URL )",
        enName: "Image ( URL )",
    },
];
