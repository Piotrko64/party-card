import { NamesFont } from "types/typesForStyles/NamesFont";

export type ComponentNames = "tagCloud" | "wishWall";

type IdType = { id: string };

export type UnionWishElements = TagCloudType | WallWishType;

export type TagCloudType = {
    name: "tagCloud";
    texts: Array<string>;
    color: string;
    font: NamesFont;
} & IdType;

export type WallWishType = {
    name: "wishWall";
    texts: Array<string>;
    color: string;
    font: NamesFont;
} & IdType;

export type WishesSectionStore = {
    elements: Array<UnionWishElements>;
    addElementWish: (el: UnionWishElements) => void;
    changeWishValue: (nameProperty: string, newValue: string | Array<string>, id: string) => void;
};
