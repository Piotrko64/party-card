import { AnchornsPart } from "./anchornsPart/AnchornsPart";
import { DescribePart } from "./describePart/DescribePart";
import { TitlePart } from "./titlePart/TitlePart";
import classes from "./startPageMainComponent.module.scss";
import cx from "classnames";

export function StartPageMainComponent() {
    return (
        <header className={cx(classes.header)}>
            <TitlePart />
            <DescribePart />
            <AnchornsPart />
        </header>
    );
}
