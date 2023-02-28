import { getCorrectObjectForFont } from "helpers/styles/getCorrectObjectForFont";
import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { ButtonConfetti } from "./buttonConfetti/ButtonConfetti";
import classes from "./downText.module.scss";
import { ButtonSupriseCard } from "./supriseCard/buttonSupriseCard/ButtonSupriseCard";
import cx from "classnames";

export function DownText() {
    const endText = useHeaderSectionStore((state) => state.endText);
    const styleObjectFont = { ...getStyleFontObject(getCorrectObjectForFont(endText)) };

    return (
        <div className={classes.endText} style={styleObjectFont}>
            {/* <ButtonSupriseCard /> */}
            <ButtonConfetti />
            <div className={cx("flexCenter", classes.downText)}>{endText.text}</div>
        </div>
    );
}
