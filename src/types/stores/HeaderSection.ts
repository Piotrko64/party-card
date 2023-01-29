import { NamesFont } from "types/typesForStyles/NamesFont";

export type HeaderSection = {
    name: {
        title: string;
        color: string;
        isGradient: boolean;
        isStrokeColor: boolean;
        strokeColor: string;
        font: NamesFont;
    };

    textAboveName: {
        text: string;
        color: string;
        font: NamesFont;
        linearGradient: boolean;
    };
    textUnderName: {
        text: string;
        color: string;
        font: NamesFont;
        linearGradient: boolean;
    };
    endText: {
        font: NamesFont;
        text: string;
    };
};