import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { getStyleFontObject } from "utils/styles/toFonts/getStyleFontObject";
import classes from "./name.module.scss";
import cx from "classnames";

export function Name() {
    const { name } = useHeaderSectionStore((state) => state);
    const { title, font, color, isGradient, isStrokeColor, strokeColor } = name;

    const objectFont = { font, color, isGradient };

    console.log(isStrokeColor ? "strokeWidth" : "");
    return (
        <div
            className={cx(classes.name, isStrokeColor ? classes.strokeWidth : "")}
            style={{
                ...getStyleFontObject(objectFont),
                WebkitTextStrokeColor: strokeColor,
            }}
        >
            {title}
        </div>
    );
}
