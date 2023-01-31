import { BackgroundStore, ConfettiType } from "types/stores/BackgroundStore";

export const actionsBackgroundStore = (set: any) => ({
    turnOffConfetti: () =>
        set((state: BackgroundStore) => {
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
        set((state: BackgroundStore) => {
            console.log(state);
            return {
                fireworks: {
                    intensity: 10,
                    isFireworks: false,
                },
            };
        });
    },
});
