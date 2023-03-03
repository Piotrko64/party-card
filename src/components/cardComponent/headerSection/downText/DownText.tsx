import { getCorrectObjectForFont } from "helpers/styles/getCorrectObjectForFont";
import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { ButtonConfetti } from "./buttonConfetti/ButtonConfetti";
import classes from "./downText.module.scss";
import cx from "classnames";
import { ButtonSupriseCard } from "./supriseCard/buttonSupriseCard/ButtonSupriseCard";

export function DownText() {
    const endText = useHeaderSectionStore((state) => state.endText);
    const styleObjectFont = { ...getStyleFontObject(getCorrectObjectForFont(endText)) };

    return (
        <div className={classes.endText} style={styleObjectFont}>
            <ButtonSupriseCard />
            <ButtonConfetti />
            {endText.isActive && <div className={cx("flexCenter", classes.downText)}>{endText.text}</div>}
        </div>
    );
}
