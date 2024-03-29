import classes from "./dragLines.module.scss";
import cx from "classnames";

export function DragLines() {
    return (
        <div className={classes.lines}>
            <div className={cx(classes.line, classes.first)} />
            <div className={cx(classes.line, classes.second)} />
            <div className={cx(classes.line, classes.first)} />
        </div>
    );
}
