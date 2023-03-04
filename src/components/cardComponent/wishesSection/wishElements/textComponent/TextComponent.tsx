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

    return (
        <div style={{ ...getContainerStyle() }} className={classes.container}>
            <div style={{ ...fontStyles }} className={classes.text}>
                {text}
            </div>
        </div>
    );
}
