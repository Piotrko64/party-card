import cx from "classnames";
import { getCorrectObjectForFont } from "helpers/styles/getCorrectObjectForFont";
import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { SupriseCard } from "../supriseCard/SupriseCard";
import classes from "./buttonSupriseCard.module.scss";

export function ButtonSupriseCard() {
    const { supriseCard, toggleCard, textUnderName } = useHeaderSectionStore();
    const { isActive, isShowCard } = supriseCard;

    const styleObjectFont = { ...getStyleFontObject(getCorrectObjectForFont(textUnderName)) };

    return (
        <>
            {isActive && (
                <button style={styleObjectFont} onClick={toggleCard} className={classes.button}>
                    Kliknij tu!
                </button>
            )}
            <br></br>
            {isActive && <SupriseCard />}
        </>
    );
}
