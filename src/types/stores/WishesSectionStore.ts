import { NamesFont } from "types/typesForStyles/NamesFont";

export type ComponentNames = "tagCloud" | "wishWall" | "imageURL";

type IdType = { id: string };

export type UnionWishElements = TagCloudType | WallWishType | ImageURLType;

export type UnionWishElementsWithTexts = TagCloudType | WallWishType;

type ListTextes = Array<{ id: string; content: string }>;

export type TagCloudType = {
    name: "tagCloud";
    texts: ListTextes;
    color: string;
    font: NamesFont;
} & IdType;

export type WallWishType = {
    name: "wishWall";
    texts: ListTextes;
    color: string;
    font: NamesFont;
} & IdType;

export type ImageURLType = {
    name: "imageURL";
    isBorder: boolean;
    backgroundColor: string;
    url: string;
} & IdType;

export type WishesSectionStore = {
    elements: Array<UnionWishElements>;
    addElementWish: (el: UnionWishElements) => void;
    changeWishValue: (nameProperty: string, newValue: string | Array<string>, id: string) => void;
    changeValueText: (idComponent: string, textId: string, newValue: string) => void;
    addTextInput: (idComponent: string) => void;
    deleteTextInput: (idComponent: string, idText: string) => void;

    changePropertyValue: (newValue: string | boolean, idComponent: string, nameProperty: string) => void;
};
