import { EntireTypeHeader, HeaderSection } from "types/stores/HeaderSection";
import { create } from "zustand";
import { initialValueHeaderStore } from "./initialValueHeaderSection";
import { produce } from "immer";
import { createJSONStorage, persist } from "zustand/middleware";

export const useHeaderSectionStore = create(
    persist<EntireTypeHeader>(
        (set) => ({
            ...initialValueHeaderStore,

            setEntireHeaderStore: (newState: HeaderSection) => {
                set((state: EntireTypeHeader) => ({ ...state, ...newState }));
            },

            toggleActiveHeader: () =>
                set(
                    produce((state: HeaderSection) => {
                        state.isActive = !state.isActive;
                    })
                ),
            changeValueInput: (inputNameProperty: string, newValue: string | boolean, lastProperty: string) =>
                set(
                    produce((state: HeaderSection) => {
                        //@ts-ignore
                        state[inputNameProperty][lastProperty] = newValue;
                    })
                ),

            changeBackgroundSupriseCard: (color: string) =>
                set(
                    produce((state: HeaderSection) => {
                        state.supriseCard.backgroundColor = color;
                    })
                ),

            toggleActiveSection: (nameSection: string) =>
                set(
                    produce((state) => {
                        state[nameSection].isActive = !state[nameSection].isActive;
                    })
                ),

            toggleCard: () =>
                set(
                    produce((state: HeaderSection) => {
                        state.supriseCard.isShowCard = !state.supriseCard.isShowCard;
                    })
                ),
        }),
        {
            name: "header-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
