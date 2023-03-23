import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";
import classes from "./supriseCard.module.scss";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

export function SupriseCard() {
    const { isShowCard, color, backgroundColor, text, font } = useHeaderSectionStore(
        (state) => state.supriseCard
    );
    const { t } = useTranslation("ui");
    const { toggleCard } = useHeaderSectionStore();

    const style = getStyleFontObject({ font, color });

    return createPortal(
        <div style={{ backgroundColor, left: isShowCard ? "100%" : "0%" }} className={classes.supriseCard}>
            <p style={{ ...style }} className={classes.text}>
                {text}
            </p>
            <button style={{ ...style }} onClick={toggleCard}>
                {t("close")}
            </button>
        </div>,
        document.body
    );
}
