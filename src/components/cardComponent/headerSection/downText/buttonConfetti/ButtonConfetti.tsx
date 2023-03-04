import { getCorrectObjectForFont } from "helpers/styles/getCorrectObjectForFont";
import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import cx from "classnames";
import classes from "./buttonConfetti.module.scss";
import Confetti from "react-confetti";
import { getHeightWindow } from "helpers/getHeightWindow";
import { useState } from "react";

export function ButtonConfetti() {
    const { textAboveName } = useHeaderSectionStore();
    const confetti = useBackgroundStore((state) => state.confetti);
    const { buttonConfetti, amountConfetti } = confetti;

    const styleObjectFont = { ...getStyleFontObject(getCorrectObjectForFont(textAboveName)) };

    const [isConfetti, setConfetti] = useState(false);

    return (
        <>
            {buttonConfetti && (
                <button
                    data-color={styleObjectFont.color}
                    style={styleObjectFont}
                    className={cx(classes.button, isConfetti ? classes.inActive : "")}
                    onClick={() => setConfetti(true)}
                >
                    Kliknij tu po więcej Confetti!
                </button>
            )}
            {isConfetti && (
                <Confetti
                    width={window.innerWidth}
                    height={getHeightWindow()}
                    numberOfPieces={amountConfetti}
                    gravity={0.25}
                    recycle={false}
                    style={{ pointerEvents: "none" }}
                    wind={0}
                    onConfettiComplete={() => {
                        setConfetti(false);
                    }}
                />
            )}
        </>
    );
}
