import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";

export function useConfettiManage() {
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

    return { t, changeAmountConfetti, toggleButtonConfetti, toggleConfetti, confetti };
}
