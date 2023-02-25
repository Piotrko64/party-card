import { HeaderSection } from "types/stores/HeaderSection";
import produce from "immer";
import { NamesFont } from "types/typesForStyles/NamesFont";

export function actionsHeaderStore(set: any) {
    return {
        setNameText: () => {},

        toggleCard: () =>
            set(
                produce((state: HeaderSection) => {
                    state.supriseCard.isActive = !state.supriseCard.isActive;
                })
            ),
    };
}

type InferSetType = {
    (
        partial:
            | HeaderSection
            | Partial<HeaderSection>
            | ((state: HeaderSection) => HeaderSection | Partial<HeaderSection>),
        replace?: boolean | undefined
    ): void;
    (
        arg0: (base: {
            readonly name: {
                readonly title: string;
                readonly color: string;
                readonly isGradient: boolean;
                readonly isStrokeColor: boolean;
                readonly strokeColor: string;
                readonly font: NamesFont;
            };
            readonly supriseCard: {
                readonly isActive: boolean;
                readonly isShowCard: boolean;
                readonly text: string;
                readonly color: string;
                readonly isGradient: boolean;
                readonly isStrokeColor: boolean;
                readonly strokeColor: string;
                readonly font: NamesFont;
            };
            readonly textAboveName: {
                readonly text: string;
                readonly color: string;
                readonly font: NamesFont;
                readonly isGradient: boolean;
            };
            readonly textUnderName: {
                readonly text: string;
                readonly color: string;
                readonly font: NamesFont;
                readonly isGradient: boolean;
            };
            readonly endText: { readonly font: NamesFont; readonly text: string; readonly color: string };
        }) => HeaderSection
    ): any;
};
