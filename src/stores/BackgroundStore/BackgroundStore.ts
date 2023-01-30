import { BackgroundStore } from "types/stores/BackgroundStore";
import { create } from "zustand";
import { produce } from "immer";

export const useBackgroundStore = create<BackgroundStore>((set, get) => ({
    background: {
        color: "#6a88a0",
    },
    confetti: {
        onStart: true,
        buttonConfetti: true,
        amountConfetti: 800,
        isActive: false,
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

    turnOffConfetti: () =>
        set((state) => {
            console.log(state);
            return {
                confetti: {
                    onStart: true,
                    buttonConfetti: true,
                    amountConfetti: 800,
                    isActive: true,
                },
            };
        }),

    turnOnConfetti: () => {
        set((state) => {
            console.log(state);
            return {
                fireworks: {
                    intensity: 10,
                    isFireworks: false,
                },
            };
        });
    },

    // turnOnConfetti: () => {},
}));
