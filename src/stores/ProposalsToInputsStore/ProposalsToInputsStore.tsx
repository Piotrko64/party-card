import { ProposalsToInputs } from "types/stores/ProposalsToInputs";
import { create } from "zustand";

export const useProposalsToInputs = create<ProposalsToInputs>((set) => ({
    emojiArray: ["🎉", "🥳", "😋", "😍"],
}));
