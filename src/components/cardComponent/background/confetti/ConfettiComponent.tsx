import { useState } from "react";
import Confetti from "react-confetti";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";

export function ConfettiComponent() {
    const { confetti, turnOffConfetti } = useBackgroundStore((state) => state);
    const { amountConfetti, isActive, onStart } = confetti;

    function getCorrectHeight() {
        const body = document.body,
            html = document.documentElement;

        return Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
    }

    return (
        <>
            <Confetti
                width={window.innerWidth}
                height={getCorrectHeight()}
                numberOfPieces={amountConfetti}
                gravity={0.25}
                recycle={false}
                wind={0}
                onConfettiComplete={turnOffConfetti}
            />
        </>
    );
}
