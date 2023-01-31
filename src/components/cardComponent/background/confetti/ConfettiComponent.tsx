import { getHeightWindow } from "helpers/getHeightWindow";
import Confetti from "react-confetti";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";

export function ConfettiComponent() {
    const { amountConfetti, onStart } = useBackgroundStore((state) => state.confetti);

    return (
        <>
            {onStart && (
                <Confetti
                    width={window.innerWidth}
                    height={getHeightWindow()}
                    numberOfPieces={amountConfetti}
                    gravity={0.25}
                    recycle={false}
                    wind={0}
                />
            )}
        </>
    );
}
