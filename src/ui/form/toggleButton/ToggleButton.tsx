import classes from "./toggleButton.module.scss";
import cx from "classnames";

export function ToggleButton() {
    return (
        <>
            <label className={classes.switch}>
                <input type="checkbox" className={classes.input} />
                <span className={cx(classes.slider, classes.round)}></span>
            </label>
        </>
    );
}
