import { ChangeEvent } from "react";
import classes from "./inputRange.module.scss";

type Props = {
    max: string;
    callback: (event: ChangeEvent) => void;
    intensity: number;
};

const STEP_INPUT_RANGE = "0.1";
const MIN_INPUT_RANGE = "0";

export function InputRange({ max, callback, intensity }: Props) {
    return (
        <div className={classes.inputRange}>
            <input
                type="range"
                step={STEP_INPUT_RANGE}
                min={MIN_INPUT_RANGE}
                max={max}
                onChange={callback}
                value={intensity}
                className={classes.input}
            />
            {((intensity / +max) * 100).toFixed(0) + "/100"}
        </div>
    );
}
