import { NamesFont } from "types/typesForStyles/NamesFont";

type Arguments = {
    color: string;
    font: NamesFont;
    isGradient?: boolean;
};

export function getCorrectObjectForFont(nameProperty: Arguments) {
    return {
        font: nameProperty["font"],

        isGradient: nameProperty["isGradient"] || false,
        color: nameProperty["color"],
    };
}
