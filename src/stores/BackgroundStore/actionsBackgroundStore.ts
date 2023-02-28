import produce from "immer";
import {
    BackgroundStore,
    ConfettiType,
    PossiblePropertySectionToChangeBackground,
} from "types/stores/BackgroundStore";
import { PossiblePropertySectionToChange } from "types/stores/HeaderSection";
import { NamesIconBackground } from "types/background/NamesIconBackground";

export const actionsBackgroundStore = (set: any) => ({
    changeValue: (
        inputNameProperty: string | NamesIconBackground,
        newValue: string | boolean,
        lastProperty: string
    ) =>
        set(
            produce((state: BackgroundStore) => {
                //@ts-ignore
                state[inputNameProperty][lastProperty] = newValue;
            })
        ),
});
