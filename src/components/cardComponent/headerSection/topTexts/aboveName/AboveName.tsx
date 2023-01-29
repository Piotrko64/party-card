import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { getStyleFontObject } from "utils/styles/toFonts/getStyleFontObject";
import { getCorrectObjectForFont } from "./../../../../../utils/styles/getCorrectObjectForFont";

export function AboveName() {
    const { textAboveName } = useHeaderSectionStore((state) => state);
    const { text } = textAboveName;

    const styleObjectFont = { ...getStyleFontObject(getCorrectObjectForFont(textAboveName)) };

    return <div style={styleObjectFont}>{text}</div>;
}
