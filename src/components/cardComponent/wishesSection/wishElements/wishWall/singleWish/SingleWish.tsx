import { useRef } from "react";
import styles from "./singleWish.module.scss";
import cx from "classnames";
import { useObserver } from "hooks/observerApi/useObserver";
import { NamesFont } from "types/typesForStyles/NamesFont";
import { getCorrectObjectForFont } from "../../../../../../helpers/styles/getCorrectObjectForFont";
import { getStyleFontObject } from "../../../../../../helpers/styles/toFonts/getStyleFontObject";

type Props = {
    text: string;
    side: "left" | "right";
    font: NamesFont;
    color: string;
};

export function SingleWish({ text, side, font, color }: Props) {
    const wish = useRef<HTMLDivElement>(null);
    const isActive = useObserver(wish);

    const fontStyle = getStyleFontObject({ font, color });

    return (
        <div
            ref={wish}
            className={cx(styles.singleWish, styles[side], isActive ? styles.activeWish : "")}
            style={fontStyle}
        >
            {text}
        </div>
    );
}
