import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";
import { getCorrectObjectForFont } from "helpers/styles/getCorrectObjectForFont";
import classes from "./underName.module.scss";

export function UnderName() {
    const { textUnderName } = useHeaderSectionStore((state) => state);
    const { text } = textUnderName;

    const styleObjectFont = { ...getStyleFontObject(getCorrectObjectForFont(textUnderName)) };

    return (
        <div style={styleObjectFont} className={classes.underText}>
            {text}
        </div>
    );
}
