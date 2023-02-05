import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";
import { TagCloudType } from "types/stores/WishesSectionStore";
import cx from "classnames";
import classes from "./tagCloud.module.scss";

export function TagCloudComponent({ texts, color, font }: TagCloudType) {
    return (
        <div
            className={cx("tagCloud flexCenter", classes.tagCloud)}
            style={getStyleFontObject({ font, color })}
        >
            <TagCloud
                options={(w: Window & typeof globalThis) => ({
                    radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                    maxSpeed: "normal",
                })}
            >
                {texts}
            </TagCloud>
        </div>
    );
}
