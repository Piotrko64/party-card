import produce from "immer";
import { BackgroundStore } from "types/stores/BackgroundStore";

import { NamesIconBackground } from "types/background/NamesIconBackground";

export const actionsBackgroundStore = (set: any) => ({
    setEntireBackgroundStore: () => {
        set((state: BackgroundStore) => ({ ...state }));
    },

    changeValue: (
        inputNameProperty: string | NamesIconBackground,
        newValue: string | boolean,
        lastProperty: string
    ) =>
        set(
            produce((state: BackgroundStore) => {
                //@ts-ignore
                state[inputNameProperty][lastProperty] = newValue;
            })
        ),
});
