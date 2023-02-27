import { ChangeEvent } from "react";
import classes from "./inputRange.module.scss";

type Props = {
    max: string;
    callback: (event: ChangeEvent) => void;
    intensity: number;
};

export function InputRange({ max, callback, intensity }: Props) {
    return (
        <div className={classes.inputRange}>
            <input
                type="range"
                step="0.1"
                min="0"
                max={max}
                onChange={callback}
                value={intensity}
                className={classes.input}
            />{" "}
            {((intensity / +max) * 100).toFixed(0) + "/100"}
        </div>
    );
}
