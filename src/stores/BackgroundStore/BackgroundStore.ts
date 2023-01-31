import { BackgroundStore } from "types/stores/BackgroundStore";
import { create } from "zustand";
import { initialValueBackground } from "./initialValueBackground";
import { actionsBackgroundStore } from "./actionsBackgroundStore";

export const useBackgroundStore = create<BackgroundStore>((set, get) => ({
    ...initialValueBackground,

    ...actionsBackgroundStore(set),
}));
