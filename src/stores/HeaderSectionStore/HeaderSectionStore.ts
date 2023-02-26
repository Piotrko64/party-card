import { EntireTypeHeader, HeaderSection, PossiblePropertyTextToChange } from "types/stores/HeaderSection";
import { create } from "zustand";
import { initialValueHeaderStore } from "./initialValueHeaderSection";
import { produce } from "immer";

export const useHeaderSectionStore = create<EntireTypeHeader>((set) => ({
    ...initialValueHeaderStore,

    changeValueTextInput: (inputNameProperty: PossiblePropertyTextToChange, newValue: string) =>
        set(
            produce((state: HeaderSection) => {
                state[inputNameProperty].text = newValue;
            })
        ),
    toggleCard: () =>
        set(
            produce((state: HeaderSection) => {
                state.supriseCard.isShowCard = !state.supriseCard.isShowCard;
            })
        ),
}));
