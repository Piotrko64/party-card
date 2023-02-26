import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";

import classes from "./name.module.scss";
import cx from "classnames";
import { getCorrectObjectForFont } from "helpers/styles/getCorrectObjectForFont";
import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";

export function Name() {
    const { name } = useHeaderSectionStore((state) => state);
    const { text, isStrokeColor, strokeColor } = name;

    const styleObjectFont = {
        ...getStyleFontObject(getCorrectObjectForFont(name)),
        WebkitTextStrokeColor: strokeColor,
    };

    return (
        <div className={cx(classes.name, isStrokeColor ? classes.strokeWidth : "")} style={styleObjectFont}>
            {text}
        </div>
    );
}
