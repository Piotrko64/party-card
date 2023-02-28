import { NamesFont } from "types/typesForStyles/NamesFont";

export type HeaderSection = {
    name: {
        text: string;
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
        backgroundColor: string;

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
    gif: {
        isShow: boolean;
        url: string;
    };
    endText: {
        font: NamesFont;
        text: string;
        color: string;
    };
};

export type HeaderActions = {
    changeBackgroundSupriseCard: (color: string) => void;
    toggleCard: () => void;
    changeValueInput: (inputNameProperty: string, newValue: string | boolean, lastProperty: string) => void;
};

export type EntireTypeHeader = HeaderSection & HeaderActions;

export type PossiblePropertySectionToChange =
    | "name"
    | "endText"
    | "supriseCard"
    | "textUnderName"
    | "textAboveName";

export type LastProperties = "text" | "font" | "color" | "isGradient" | "isStrokeColor" | "strokeColor";

export type LastPropertiesBoolean = "isGradient";
