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

    changeValueInput: (
        inputNameProperty: PossiblePropertySectionToChange,
        newValue: string | boolean,
        lastProperty: LastProperties
    ) =>
        set(
            produce((state: HeaderSection) => {
                state[inputNameProperty][lastProperty] = newValue;
            })
        ),
    toggleCard: () =>
        set(
            produce((state: HeaderSection) => {
                state.supriseCard.isShowCard = !state.supriseCard.isShowCard;
            })
        ),
}));
