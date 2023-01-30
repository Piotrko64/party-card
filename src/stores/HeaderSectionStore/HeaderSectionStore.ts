import { HeaderSection } from "types/stores/HeaderSection";
import { create } from "zustand";
import { actionsHeaderStore } from "./actionsHeaderStore";
import { initialValueHeaderStore } from "./initialValueHeaderSection";

export const useHeaderSectionStore = create<HeaderSection>((set) => ({
    ...initialValueHeaderStore,
    ...actionsHeaderStore(set),
}));
