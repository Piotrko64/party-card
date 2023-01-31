import { NamesFont } from "types/typesForStyles/NamesFont";

export type TagCloud = {
    name: "TagCloud";
    texts: Array<string>;
    color: string;
    font: NamesFont;
};

export type WishesSectionStore = {
    elements: Array<TagCloud>;
};
