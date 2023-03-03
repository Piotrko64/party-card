import { NamesFont } from "types/typesForStyles/NamesFont";

export type ComponentNames = "tagCloud" | "wishWall" | "imageURL" | "text" | "gif";

type IdType = { id: string };

export type UnionWishElements = TagCloudType | WallWishType | ImageURLType | TextType | GifSectionType;

export type UnionWishElementsWithTexts = TagCloudType | WallWishType;

export type ListTexts = Array<{ id: string; content: string }>;

export type TagCloudType = {
    name: "tagCloud";
    texts: ListTexts;
    color: string;
    font: NamesFont;
} & IdType;

export type WallWishType = {
    name: "wishWall";
    texts: ListTexts;
    color: string;
    font: NamesFont;
} & IdType;

export type ImageURLType = {
    name: "imageURL";
    isBorder: boolean;
    backgroundColor: string;
    url: string;
} & IdType;

export type GifSectionType = {
    name: "gif";

    url: "";
} & IdType;

export type TextType = {
    size: "normal" | "medium" | "theBiggest";
    name: "text";
    text: string;
    isFullWidth: boolean;
    color: string;
    backgroundColor: string;
    font: NamesFont;
    marginTop: number;
    marginBottom: number;
    isGradient: boolean;
} & IdType;

export type WishesSectionStore = {
    elements: Array<UnionWishElements>;
    addElementWish: (el: UnionWishElements) => void;
    changeWishValue: (nameProperty: string, newValue: string | Array<string>, id: string) => void;
    changeValueText: (idComponent: string, textId: string, newValue: string) => void;
    addTextInput: (idComponent: string) => void;
    deleteTextInput: (idComponent: string, idText: string) => void;
    setWishesElements: (newElements: Array<UnionWishElements>) => void;
    changePropertyValue: (newValue: string | boolean, idComponent: string, nameProperty: string) => void;
};
