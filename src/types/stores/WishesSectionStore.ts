import { NamesFont } from "types/typesForStyles/NamesFont";

export type ComponentNames = "tagCloud" | "wishWall";

type IdType = { id: string };

export type UnionWishElements = (TagCloudType | WallWishType) & IdType;

export type TagCloudType = {
    name: "tagCloud";
    texts: Array<string>;
    color: string;
    font: NamesFont;
};

export type WallWishType = {
    name: "wishWall";
    wishes: Array<string>;
    color: string;
    font: NamesFont;
};

export type WishesSectionStore = {
    elements: Array<UnionWishElements>;
};
