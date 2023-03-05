import { getCorrectObjectForFont } from "helpers/styles/getCorrectObjectForFont";
import { getStyleFontObject } from "helpers/styles/toFonts/getStyleFontObject";
import { useTranslation } from "react-i18next";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { SupriseCard } from "../supriseCard/SupriseCard";
import classes from "./buttonSupriseCard.module.scss";

export function ButtonSupriseCard() {
    const { supriseCard, toggleCard, textUnderName } = useHeaderSectionStore();
    const { isActive } = supriseCard;

    const styleObjectFont = { ...getStyleFontObject(getCorrectObjectForFont(textUnderName)) };

    const { t } = useTranslation("ui");
    return (
        <>
            {isActive && (
                <button style={styleObjectFont} onClick={toggleCard} className={classes.button}>
                    {t("click")}
                </button>
            )}
            <br></br>
            {isActive && <SupriseCard />}
        </>
    );
}
