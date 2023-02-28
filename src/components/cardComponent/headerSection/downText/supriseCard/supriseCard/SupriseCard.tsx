import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";
import classes from "./supriseCard.module.scss";
import { createPortal } from "react-dom";

export function SupriseCard() {
    const { isShowCard, color, backgroundColor, text, font } = useHeaderSectionStore(
        (state) => state.supriseCard
    );

    const { toggleCard } = useHeaderSectionStore();

    const style = getStyleFontObject({ font, color });

    return createPortal(
        <div style={{ backgroundColor, top: isShowCard ? "100vh" : "0vh" }} className={classes.supriseCard}>
            <p style={{ ...style }} className={classes.text}>
                {text}
            </p>
            <button style={{ ...style }} onClick={toggleCard}>
                Zamknij
            </button>
        </div>,
        document.body
    );
}
