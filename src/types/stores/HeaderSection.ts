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
    supriseCard: {
        isActive: boolean;
        isShowCard: boolean;
        text: string;
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
        isGradient: boolean;
    };
    textUnderName: {
        text: string;
        color: string;
        font: NamesFont;
        isGradient: boolean;
    };
    endText: {
        font: NamesFont;
        text: string;
        color: string;
    };
};

export type HeaderActions = { toggleCard: () => any };

export type EntireTypeHeader = HeaderSection & HeaderActions;
