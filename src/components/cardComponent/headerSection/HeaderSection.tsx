import { TopTexts } from "./topTexts/TopTexts";
import { DownText } from "./downText/DownText";
import classes from "./headerSection.module.scss";
import cx from "classnames";

export function HeaderSection() {
    return (
        <div className={cx(classes.headerSection, "flexColumn")}>
            <TopTexts />
            <DownText />
        </div>
    );
}
