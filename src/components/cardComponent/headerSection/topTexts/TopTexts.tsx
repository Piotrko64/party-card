import { Name } from "./name/Name";
import classes from "./topTexts.module.scss";
import cx from "classnames";
import { AboveName } from "./aboveName/AboveName";
import { UnderName } from "./underName/UnderName";

export function TopTexts() {
    return (
        <header className={cx(classes.header, "flexCenter")}>
            <AboveName />
            <Name />
            <UnderName />
        </header>
    );
}
