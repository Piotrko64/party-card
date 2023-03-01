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
    {
        title: "text",
        componentObject: {
            id: uuidv4(),
            name: "text",

            text: "text",
            isFullWidth: false,
            color: "linear-gradient(110deg, rgb(120, 19, 235) 0%, rgb(142, 21, 255) 10%, rgb(150, 57, 236) 25%, rgb(227, 56, 56) 50%, rgb(236, 170, 0) 80%, rgb(233, 186, 68) 100%)",
            backgroundColor: "white",
            font: "Jost",
            marginTop: 20,
            marginBottom: 20,
            isGradient: true,
            size: "theBiggest",
        },
        plName: "Wystylizowany tekst",
        enName: "Custom text",
    },
    {
        title: "gif",
        componentObject: {
            id: uuidv4(),
            name: "gif",

            url: "",
        },
        plName: "Gif",
        enName: "Gif",
    },
];
