import produce from "immer";
import { BackgroundStore, BackgroundStoreWithoutFunctions } from "types/stores/BackgroundStore";

import { NamesIconBackground } from "types/background/NamesIconBackground";

export const actionsBackgroundStore = (set: any) => ({
    setEntireBackgroundStore: (newState: BackgroundStoreWithoutFunctions) => {
        set((state: BackgroundStore) => ({ ...state, ...newState }));
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
