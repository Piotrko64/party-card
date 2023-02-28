import { EntireTypeHeader, HeaderSection } from "types/stores/HeaderSection";
import { create } from "zustand";
import { initialValueHeaderStore } from "./initialValueHeaderSection";
import { produce } from "immer";

export const useHeaderSectionStore = create<EntireTypeHeader>((set) => ({
    ...initialValueHeaderStore,

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
                console.log(color);
                state.supriseCard.backgroundColor = color;
            })
        ),

    toggleCard: () =>
        set(
            produce((state: HeaderSection) => {
                state.supriseCard.isShowCard = !state.supriseCard.isShowCard;
            })
        ),
}));
