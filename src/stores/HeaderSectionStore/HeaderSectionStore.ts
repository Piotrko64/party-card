import { EntireTypeHeader, HeaderSection } from "types/stores/HeaderSection";
import { create } from "zustand";
import { initialValueHeaderStore } from "./initialValueHeaderSection";
import { produce } from "immer";

export const useHeaderSectionStore = create<EntireTypeHeader>((set) => ({
    ...initialValueHeaderStore,
    toggleCard: () =>
        set(
            produce((state: HeaderSection) => {
                state.supriseCard.isShowCard = !state.supriseCard.isShowCard;
            })
        ),
}));
