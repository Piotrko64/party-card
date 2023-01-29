import { BackgroundStore } from "types/stores/BackgroundStore";
import { create } from "zustand";
import { actionsBackgroundStore } from "./actionsBackgroundStore";
import { initialValueBackground } from "./initialValueBackground";

export const useBackgroundStore = create<BackgroundStore>((set) => ({
    ...initialValueBackground,
    ...actionsBackgroundStore(set),
}));
