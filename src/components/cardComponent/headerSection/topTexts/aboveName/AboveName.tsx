import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";
import { getCorrectObjectForFont } from "helpers/styles/getCorrectObjectForFont";
import classes from "./aboveName.module.scss";

export function AboveName() {
    const { textAboveName } = useHeaderSectionStore((state) => state);
    const { text } = textAboveName;

    const styleObjectFont = { ...getStyleFontObject(getCorrectObjectForFont(textAboveName)) };

    return (
        <div style={styleObjectFont} className={classes.aboveText}>
            {text}
        </div>
    );
}
