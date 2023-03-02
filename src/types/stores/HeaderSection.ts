import { NamesFont } from "types/typesForStyles/NamesFont";

export type HeaderSection = {
    isActive: boolean;
    name: {
        isActive: boolean;
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
        isActive: boolean;
        text: string;
        color: string;
        font: NamesFont;
        isGradient: boolean;
    };
    textUnderName: {
        isActive: boolean;
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
        isActive: boolean;
        font: NamesFont;
        text: string;
        color: string;
    };
};

export type HeaderActions = {
    setEntireHeaderStore: (newState: HeaderSection) => void;
    changeBackgroundSupriseCard: (color: string) => void;
    toggleActiveHeader: () => void;
    toggleCard: () => void;
    changeValueInput: (inputNameProperty: string, newValue: string | boolean, lastProperty: string) => void;
    toggleActiveSection: (nameSection: string) => void;
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
