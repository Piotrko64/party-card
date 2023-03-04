import { Name } from "./name/Name";
import classes from "./topTexts.module.scss";
import cx from "classnames";
import { AboveName } from "./aboveName/AboveName";
import { UnderName } from "./underName/UnderName";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { useRef } from "react";

export function TopTexts() {
    const { gif } = useHeaderSectionStore();
    const header = useRef<HTMLDivElement>(null);

    return (
        <header className={cx(classes.header, "flexCenter")} ref={header}>
            <AboveName />
            <Name />
            <UnderName />
        </header>
    );
}
