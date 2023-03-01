import { NamesFont } from "types/typesForStyles/NamesFont";
import { getCorrectFont } from "./getCorrectFont";

type Arguments = { font: NamesFont; color: string; isGradient?: boolean };

export function getStyleFontObject({ font, color, isGradient }: Arguments) {
    return {
        fontFamily: getCorrectFont(font),
        color: isGradient ? "transparent" : color,
        backgroundImage: isGradient ? color : "none",
        backgroundClip: isGradient ? "text" : "none",
        WebkitBackgroundClip: isGradient ? "text" : "none",
    };
}
