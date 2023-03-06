import { useTranslation } from "react-i18next";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";

export function BackgroundForm() {
    const { changeValue, background } = useBackgroundStore();
    const { t } = useTranslation("generate");

    return (
        <>
            <h3> {t("backColor")} </h3>

            <InputColorSection
                callbackToChangeColor={changeValue}
                nameSection={"background"}
                thisColor={background.color}
            />
        </>
    );
}
