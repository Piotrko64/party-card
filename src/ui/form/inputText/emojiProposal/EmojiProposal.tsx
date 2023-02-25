import { useProposalsToInputs } from "stores/ProposalsToInputsStore/ProposalsToInputsStore";
import classes from "./emojiProposal.module.scss";

export function EmojiProposal() {
    const { emojiArray } = useProposalsToInputs();

    return (
        <div className={classes.emojiSet}>
            {emojiArray.map((emoji) => (
                <span>{emoji}</span>
            ))}{" "}
        </div>
    );
}
