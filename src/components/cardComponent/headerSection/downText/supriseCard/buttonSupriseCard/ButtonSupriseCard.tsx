import cx from "classnames";
import { getCorrectObjectForFont } from "helpers/styles/getCorrectObjectForFont";
import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import classes from "./buttonSupriseCard.module.scss";

export function ButtonSupriseCard() {
    const { supriseCard, toggleCard } = useHeaderSectionStore();

    const { isActive, isShowCard } = supriseCard;

    const styleObjectFont = { ...getStyleFontObject(getCorrectObjectForFont(supriseCard)) };

    return (
        <>
            {isActive && (
                <button data-color={styleObjectFont.color} style={styleObjectFont} onClick={toggleCard}>
                    Kliknij tu po niespodziankę!
                </button>
            )}
            {isShowCard && <div>aaaaaaaaaaaaaaaa</div>}
        </>
    );
}
