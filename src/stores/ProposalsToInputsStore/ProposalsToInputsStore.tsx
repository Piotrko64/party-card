import { proposalColors, proposalGradients } from "data/colors/proposalColors";
import { ProposalsToInputs } from "types/stores/ProposalsToInputs";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useProposalsToInputs = create(
    persist<ProposalsToInputs>(
        (set) => ({
            colors: proposalColors,
            gradientColors: proposalGradients,
        }),
        {
            name: "proposals",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
