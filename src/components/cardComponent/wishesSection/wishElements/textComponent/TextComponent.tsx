import { TextType } from "types/stores/WishesSectionStore";
import classes from "./textComponent.module.scss";
import { getCorrectObjectForFont } from "helpers/styles/getCorrectObjectForFont";
import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";

export function TextComponent({
    text,
    marginTop,
    marginBottom,
    isFullWidth,
    isGradient,
    font,
    color,
    backgroundColor,
    size,
}: TextType) {
    const fontStyles = getStyleFontObject({ font, isGradient, color });

    function getContainerStyle() {
        function addStyleBySize() {
            return {
                fontSize: size === "normal" ? "1.2rem" : size === "medium" ? "2.9" : "4.6rem",
                padding: size === "normal" ? "5px" : size === "medium" ? "15px 10px" : "25px 15px",
                fontWeight: size === "theBiggest" ? "600" : "400",
            };
        }

        return {
            marginBottom,
            marginTop,
            backgroundColor,
            width: isFullWidth ? "100%" : "fit-content",
            borderRadius: isFullWidth ? "0" : "10",
            ...addStyleBySize(),
        };
    }

    return (
        <div style={{ ...getContainerStyle() }}>
            <div style={{ ...fontStyles }} className={classes.text}>
                {text}
            </div>
        </div>
    );
}
