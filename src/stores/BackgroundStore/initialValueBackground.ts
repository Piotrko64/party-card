import { BackgroundStore } from "types/stores/BackgroundStore";

export const initialValueBackground = {
    background: {
        color: "#111222",
    },
    confetti: {
        onStart: true,
        buttonConfetti: true,
        amountConfetti: 800,
        isActive: true,
    },
    backgroundDecorations: {
        isDecorations: true,
        kindDecorations: "heart",
        color: "white",
    },
    fireworks: {
        isFireworks: true,
        intensity: 3,
    },
};
