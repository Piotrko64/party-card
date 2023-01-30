import { getCorrectObjectForFont } from "helpers/styles/getCorrectObjectForFont";
import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import cx from "classnames";
import classes from "./buttonConfetti.module.scss";
import { shallow } from "zustand/shallow";

export function ButtonConfetti() {
    const { textAboveName } = useHeaderSectionStore();
    const confetti = useBackgroundStore((state) => state.confetti);
    const { buttonConfetti, isActive } = confetti;

    const styleObjectFont = { ...getStyleFontObject(getCorrectObjectForFont(textAboveName)) };

    return (
        <>
            {(buttonConfetti || isActive) && (
                <button
                    data-color={styleObjectFont.color}
                    style={styleObjectFont}
                    className={cx(classes.button, isActive ? classes.inActive : "")}
                >
                    {isActive ? "asdad" : "asdadsdssdd"}
                    Kliknij tu po więcej Confetti!
                </button>
            )}
        </>
    );
}
