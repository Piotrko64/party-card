import { ButtonConfetti } from "./buttonConfetti/ButtonConfetti";
import classes from "./downText.module.scss";

export function DownText() {
    return (
        <div className={classes.endText}>
            <ButtonConfetti />
            <div> al ma koata as kor ma </div>
        </div>
    );
}
