import Confetti from "react-confetti";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";

export function ConfettiComponent() {
    const { amountConfetti, onStart } = useBackgroundStore((state) => state.confetti);

    return (
        <>
            {onStart && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    numberOfPieces={amountConfetti}
                    gravity={0.75}
                    recycle={false}
                    wind={0}
                />
            )}
        </>
    );
}
