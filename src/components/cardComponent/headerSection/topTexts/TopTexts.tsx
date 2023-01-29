import { Name } from "./name/Name";
import classes from "./topTexts.module.scss";
import cx from "classnames";
import { AboveName } from "./aboveName/AboveName";

export function TopTexts() {
    return (
        <header className={cx(classes.header, "flexCenter")}>
            <AboveName />
            <Name />
        </header>
    );
}
