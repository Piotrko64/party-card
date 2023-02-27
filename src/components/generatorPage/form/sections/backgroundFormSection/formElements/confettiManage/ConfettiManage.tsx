import { InputRange } from "ui/form/inputRange/InputRange";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { useBackgroundStore } from "./../../../../../../../stores/BackgroundStore/BackgroundStore";
import { ChangeEvent } from "react";

const MAX_AMOUNT = "1200";

export function ConfettiManage() {
    const { confetti, changeValue } = useBackgroundStore();

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
                text="Uruchomić confetti przy starcie?"
                callback={toggleConfetti}
                isChecked={confetti.onStart}
            />
            <h4> Dobierz intensywność confetti </h4>
            <InputRange
                max={MAX_AMOUNT}
                callback={changeAmountConfetti}
                intensity={confetti.amountConfetti}
            />

            <TextWithToggleButton
                text="Dodać przycisk do confetti do sekcji głównej?"
                callback={toggleButtonConfetti}
                isChecked={confetti.buttonConfetti}
            />
        </>
    );
}
