import { AnchornsPart } from "./anchorns/Anchorns";
import { DescribePart } from "./describePart/DescribePart";
import { TitlePart } from "./titlePart/TitlePart";
import classes from "./startPageMainComponent.module.scss";
import cx from "classnames";

export function StartPageMainComponent() {
    return (
        <header className={cx(classes.header)}>
            <section className={cx(classes.mainContent, "flexColumn")}>
                <TitlePart />
                <DescribePart />
                <AnchornsPart />
            </section>
        </header>
    );
}
