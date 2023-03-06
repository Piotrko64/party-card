import { InputRange } from "ui/form/inputRange/InputRange";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { useConfettiManage } from "./hook/useConfettiManage";

const MAX_AMOUNT = "1200";

export function ConfettiManage() {
    const { t, changeAmountConfetti, toggleButtonConfetti, toggleConfetti, confetti } = useConfettiManage();
    return (
        <>
            <h3> Confetti </h3>

            <TextWithToggleButton
                text={t("startConfetti")}
                callbackToToggle={toggleConfetti}
                isChecked={confetti.onStart}
            />
            <TextWithToggleButton
                text={t("buttonConfetti")}
                callbackToToggle={toggleButtonConfetti}
                isChecked={confetti.buttonConfetti}
            />
            {(confetti.onStart || confetti.buttonConfetti) && (
                <>
                    <h4>{t("intensityConfetti")} </h4>
                    <InputRange
                        max={MAX_AMOUNT}
                        callbackToChangeRangeValue={changeAmountConfetti}
                        intensity={confetti.amountConfetti}
                    />
                </>
            )}
        </>
    );
}
