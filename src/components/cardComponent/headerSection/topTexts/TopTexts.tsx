import { Name } from "./name/Name";
import classes from "./topTexts.module.scss";
import cx from "classnames";
import { AboveName } from "./aboveName/AboveName";
import { UnderName } from "./underName/UnderName";
import { useRef } from "react";

export function TopTexts() {
    const header = useRef<HTMLDivElement>(null);

    return (
        <header className={cx("flexCenter", classes.header)} ref={header}>
            <AboveName />
            <Name />
            <UnderName />
        </header>
    );
}
