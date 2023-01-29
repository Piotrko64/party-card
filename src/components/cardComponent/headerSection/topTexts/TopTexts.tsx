import { Name } from "./name/Name";
import classes from "./topTexts.module.scss";
import cx from "classnames";

export function TopTexts() {
    return (
        <header className={cx(classes.header, "flexCenter")}>
            <Name />
        </header>
    );
}
