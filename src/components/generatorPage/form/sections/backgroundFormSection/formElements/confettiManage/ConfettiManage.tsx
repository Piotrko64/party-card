import { InputRange } from "ui/form/inputRange/InputRange";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { useBackgroundStore } from "./../../../../../../../stores/BackgroundStore/BackgroundStore";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const MAX_AMOUNT = "1200";

export function ConfettiManage() {
    const { confetti, changeValue } = useBackgroundStore();
    const { t } = useTranslation("generate");

    function toggleConfetti() {
        changeValue("confetti", !confetti.onStart, "onStart");
    }

    function toggleButtonConfetti() {
        changeValue("confetti", !confetti.buttonConfetti, "buttonConfetti");
    }

    function changeAmountConfetti(event: ChangeEvent) {
        changeValue("confetti", (event.target as HTMLInputElement).value, "amountConfetti");
    }

    return (
        <>
            <h3> Confetti </h3>

            <TextWithToggleButton
                text={t("startConfetti")}
                callback={toggleConfetti}
                isChecked={confetti.onStart}
            />
            <TextWithToggleButton
                text={t("buttonConfetti")}
                callback={toggleButtonConfetti}
                isChecked={confetti.buttonConfetti}
            />
            {(confetti.onStart || confetti.buttonConfetti) && (
                <>
                    <h4>{t("intensityConfetti")} </h4>
                    <InputRange
                        max={MAX_AMOUNT}
                        callback={changeAmountConfetti}
                        intensity={confetti.amountConfetti}
                    />
                </>
            )}
        </>
    );
}
