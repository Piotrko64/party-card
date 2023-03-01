import { HeaderSection } from "types/stores/HeaderSection";
import produce from "immer";

export function actionsHeaderStore(set: any) {
    return {
        toggleCard: () =>
            set(
                produce((state: HeaderSection) => {
                    state.supriseCard.isActive = !state.supriseCard.isActive;
                })
            ),
    };
}
