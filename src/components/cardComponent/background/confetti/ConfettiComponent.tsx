import { useState } from "react";
import Confetti from "react-confetti";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";

export function ConfettiComponent() {
    const { amountConfetti, isActive, onStart } = useBackgroundStore((state) => state.confetti);
    const { turnOffConfetti } = useBackgroundStore((state) => state);

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
            <button onClick={turnOffConfetti}> {isActive ? "asda" : "sssssssssssss"}</button>
            <Confetti
                width={window.innerWidth}
                height={getCorrectHeight()}
                numberOfPieces={amountConfetti}
                gravity={0.25}
                recycle={false}
                wind={0}
            />
        </>
    );
}
