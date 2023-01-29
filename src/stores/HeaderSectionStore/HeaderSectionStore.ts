import { create } from "zustand";
import { persist } from "zustand/middleware";
import { actionsHeaderStore } from "./actionsHeaderStore";
import { initialValueHeaderStore } from "./initialValueHeaderSection";

export const useHeaderSectionStore = create(
    persist((set) => ({ ...initialValueHeaderStore, ...actionsHeaderStore(set) }), {
        name: "header-storage",
        getStorage: () => localStorage,
    })
);
