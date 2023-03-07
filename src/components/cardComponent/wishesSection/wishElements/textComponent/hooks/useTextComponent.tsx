import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";
import { TextType } from "types/stores/WishesSectionStore";

export function useTextComponent({
    size,
    marginBottom,
    marginTop,
    font,
    isGradient,
    color,
    isFullWidth,
    backgroundColor,
}: Omit<TextType, "name" | "text" | "id">) {
    const fontStyles = getStyleFontObject({ font, isGradient, color });

    function getContainerStyle() {
        function addStyleBySize() {
            return {
                fontSize: size === "normal" ? "1.4rem" : size === "medium" ? "1.9rem" : "3.4rem",
                padding: size === "normal" ? "5px" : size === "medium" ? "10px 8px" : "15px 8px",
                fontWeight: size === "theBiggest" ? "600" : "400",
            };
        }

        return {
            marginBottom: marginBottom + "px",
            marginTop: marginTop + "px",
            backgroundColor,
            width: isFullWidth ? "100%" : "fit-content",
            borderRadius: isFullWidth ? "0" : "10px",
            ...addStyleBySize(),
        };
    }

    return { fontStyles, getContainerStyle };
}
