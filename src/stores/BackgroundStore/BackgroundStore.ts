import {
    BackgroundStore,
    BackgroundStoreWithoutFunctions,
    PossiblePropertySectionToChangeBackground,
} from "types/stores/BackgroundStore";
import { create } from "zustand";
import { initialValueBackground } from "./initialValueBackground";
import produce from "immer";
import { createJSONStorage, persist } from "zustand/middleware";

export const useBackgroundStore = create(
    persist<BackgroundStore>(
        (set) => ({
            ...initialValueBackground,

            setEntireBackgroundStore: (newState: BackgroundStoreWithoutFunctions) => {
                set((state: BackgroundStore) => ({ ...state, ...newState }));
            },

            changeValue: (inputNameProperty: string, newValue: string | boolean, lastProperty: string) =>
                set(
                    produce((state: BackgroundStore) => {
                        //@ts-ignore
                        state[inputNameProperty][lastProperty] = newValue;
                    })
                ),
        }),
        {
            name: "background-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
