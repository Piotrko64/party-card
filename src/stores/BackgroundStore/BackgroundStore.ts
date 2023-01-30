import { BackgroundStore } from "types/stores/BackgroundStore";
import { create } from "zustand";
import { actionsBackgroundStore } from "./actionsBackgroundStore";
import { initialValueBackground } from "./initialValueBackground";

export const useBackgroundStore = create<BackgroundStore>((set, get) => ({
    background: {
        color: "#6a88a0",
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
    bears: 0,

    turnOffConfetti: () =>
        set((state) => {
            state.confetti.isActive = false;

            return state;
        }),

    turnOnConfetti: () =>
        set({
            background: {
                color: "red",
            },
        }),

    // turnOnConfetti: () => {},
}));
