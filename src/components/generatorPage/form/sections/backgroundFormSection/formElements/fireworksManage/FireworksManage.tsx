import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { InputRange } from "ui/form/inputRange/InputRange";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";

const MAX_INTENSITY = "20";

export function FireworksManage() {
    const { fireworks, changeValue } = useBackgroundStore();
    const { t } = useTranslation("generate");

    function toggleFireworks() {
        changeValue("fireworks", !fireworks.isFireworks, "isFireworks");
    }

    function handleChangeIntensity(event: ChangeEvent) {
        changeValue("fireworks", (event.target as HTMLInputElement).value, "intensity");
    }

    return (
        <>
            <h3>{t("fireworks")}</h3>
            <TextWithToggleButton
                text={t("isFireworks")}
                callback={toggleFireworks}
                isChecked={fireworks.isFireworks}
            />
            {fireworks.isFireworks && (
                <div>
                    <h4> {t("intensityFireworks")} </h4>
                    <InputRange
                        max={MAX_INTENSITY}
                        callback={handleChangeIntensity}
                        intensity={fireworks.intensity}
                    />
                </div>
            )}
        </>
    );
}
