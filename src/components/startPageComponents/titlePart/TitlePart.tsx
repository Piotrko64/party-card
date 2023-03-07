import classes from "./titlePart.module.scss";
import cx from "classnames";

export function TitlePart() {
    return (
        <h1 className={cx(classes.title, "flexCenter")}>
            <div className={classes.titleName}>PARTY CARD </div>
        </h1>
    );
}
