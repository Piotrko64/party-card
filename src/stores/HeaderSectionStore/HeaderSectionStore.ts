import { HeaderSection } from "types/stores/HeaderSection";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { actionsHeaderStore } from "./actionsHeaderStore";
import { initialValueHeaderStore } from "./initialValueHeaderSection";

export const useHeaderSectionStore = create(
    persist<HeaderSection>((set) => ({ ...initialValueHeaderStore, ...actionsHeaderStore(set) }), {
        name: "header-storage",
        storage: createJSONStorage(() => localStorage),
    })
);
