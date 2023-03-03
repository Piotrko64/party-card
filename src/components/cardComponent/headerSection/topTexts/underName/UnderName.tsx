import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";
import { getCorrectObjectForFont } from "helpers/styles/getCorrectObjectForFont";
import classes from "./underName.module.scss";

export function UnderName() {
    const { textUnderName, gif } = useHeaderSectionStore((state) => state);
    const { text, isActive } = textUnderName;

    const styleObjectFont = { ...getStyleFontObject(getCorrectObjectForFont(textUnderName)) };

    return (
        <>
            {isActive && (
                <>
                    <div style={styleObjectFont} className={classes.underText}>
                        {text}
                    </div>

                    {gif.isShow && <img src={gif.url} alt="gif" className={classes.gif} />}
                </>
            )}
        </>
    );
}
