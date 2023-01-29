import { NamesFont } from "@types/typesForStyles/NamesFont";
import { fontsToChoice } from "data/fonts/fontsToChoice";

const SPARE_FONT = "'Noto Serif', serif";

export function getCorrectFont(nameFont: NamesFont) {
    return fontsToChoice.find((font) => font.name === nameFont)?.fullName || SPARE_FONT;
}
