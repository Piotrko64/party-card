import produce from "immer";
import {
    BackgroundStore,
    ConfettiType,
    PossiblePropertySectionToChangeBackground,
} from "types/stores/BackgroundStore";
import { PossiblePropertySectionToChange } from "types/stores/HeaderSection";

export const actionsBackgroundStore = (set: any) => ({
    turnOffConfetti: () =>
        set((state: BackgroundStore) => {
            return {
                confetti: {
                    onStart: true,
                    buttonConfetti: true,
                    amountConfetti: 800,
                    isActive: true,
                },
            };
        }),

    changeValue: (inputNameProperty: string, newValue: string | boolean, lastProperty: string) =>
        set(
            produce((state: BackgroundStore) => {
                //@ts-ignore
                state[inputNameProperty][lastProperty] = newValue;
            })
        ),

    turnOnConfetti: () => {
        set((state: BackgroundStore) => {
            return {
                fireworks: {
                    intensity: 10,
                    isFireworks: false,
                },
            };
        });
    },
});
