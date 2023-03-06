import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { useBackgroundStore } from "./../../../../../../../stores/BackgroundStore/BackgroundStore";
import { ListDecorations } from "./listDecorations/ListDecorations";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";
import { useTranslation } from "react-i18next";

export function DecorationPanel() {
    const { backgroundDecorations: decorations, changeValue } = useBackgroundStore();
    const { t } = useTranslation("generate");

    function toggleDecorations() {
        changeValue("backgroundDecorations", !decorations.isDecorations, "isDecorations");
    }

    return (
        <>
            <h3> {t("decorationTitle")} </h3>
            <TextWithToggleButton
                text={t("addDecoration")}
                callbackToToggle={toggleDecorations}
                isChecked={decorations.isDecorations}
            />
            {decorations.isDecorations && (
                <>
                    <ListDecorations />
                    <InputColorSection
                        withoutGradient
                        nameSection="backgroundDecorations"
                        callbackToChangeColor={changeValue}
                        thisColor={decorations.color}
                    />{" "}
                </>
            )}
        </>
    );
}
