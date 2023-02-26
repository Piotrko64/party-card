import {
    EntireTypeHeader,
    HeaderSection,
    LastProperties,
    PossiblePropertySectionToChange,
} from "types/stores/HeaderSection";
import { create } from "zustand";
import { initialValueHeaderStore } from "./initialValueHeaderSection";
import { produce } from "immer";

export const useHeaderSectionStore = create<EntireTypeHeader>((set) => ({
    ...initialValueHeaderStore,

    changeValueTextInput: (
        inputNameProperty: PossiblePropertySectionToChange,
        newValue: string,
        lastProperty: LastProperties
    ) =>
        set(
            produce((state: HeaderSection) => {
                (state[inputNameProperty][lastProperty] satisfies typeof newValue) = newValue;
            })
        ),
    toggleCard: () =>
        set(
            produce((state: HeaderSection) => {
                state.supriseCard.isShowCard = !state.supriseCard.isShowCard;
            })
        ),
}));
