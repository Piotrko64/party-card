import { NamesFont } from "types/typesForStyles/NamesFont";

export type ComponentNames = "tagCloud";

export type UnionWishElements = TagCloudType;

export type TagCloudType = {
    name: ComponentNames;
    texts: Array<string>;
    color: string;
    font: NamesFont;
};

export type WishesSectionStore = {
    elements: Array<UnionWishElements>;
};
