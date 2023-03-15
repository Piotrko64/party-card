import classes from "./toggleButton.module.scss";
import cx from "classnames";
import { ChangeEvent } from "react";

type Props = {
    onChecked: (isCheck: boolean) => void;
    isChecked: boolean;
};

export function ToggleButton({ onChecked, isChecked }: Props) {
    function handleToggle(e: ChangeEvent) {
        onChecked((e.target as HTMLInputElement).checked);
    }

    return (
        <>
            <label className={classes.switch}>
                <input
                    type="checkbox"
                    className={classes.input}
                    onChange={handleToggle}
                    checked={isChecked}
                />

                <span className={cx(classes.slider, classes.round)} />
            </label>
            {isChecked}
        </>
    );
}
