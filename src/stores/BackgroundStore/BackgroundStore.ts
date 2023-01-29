import { BackgroundStore } from "types/stores/BackgroundStore";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useBackgroundStore = create(
    persist<BackgroundStore>(
        (set) => ({
            background: {
                color: "blue",
                linearGradient: false,
            },
            confetti: {
                onStart: true,
                buttonConfetti: true,
            },
            backgroundDecorations: {
                isDecorations: true,
                kindDecorations: "heart",
            },
            fireworks: {
                isFireworks: false,
                intensity: 3,
            },
        }),
        {
            name: "background-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
