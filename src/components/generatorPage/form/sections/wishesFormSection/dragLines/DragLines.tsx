import classes from "./dragLines.module.scss";
import cx from "classnames";

type Props = { more?: true };

export function DragLines({ more }: Props) {
    return (
        <div className={classes.lines}>
            <div className={cx(classes.line, classes.first)}></div>

            <div className={cx(classes.line, classes.first)}></div>

            <div className={cx(classes.line, classes.first)}></div>
        </div>
    );
}
