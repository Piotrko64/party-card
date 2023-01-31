import { NamesFont } from "types/typesForStyles/NamesFont";

export type ComponentNames = "tagCloud";

export type TagCloud = {
    name: ComponentNames;
    texts: Array<string>;
    color: string;
    font: NamesFont;
};

export type WishesSectionStore = {
    elements: Array<TagCloud>;
};
