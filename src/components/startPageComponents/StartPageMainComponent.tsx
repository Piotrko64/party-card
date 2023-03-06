import { AnchornsPart } from "./anchorns/Anchorns";
import { DescribePart } from "./describePart/DescribePart";
import { TitlePart } from "./titlePart/TitlePart";
import classes from "./startPageMainComponent.module.scss";
import cx from "classnames";
import { LanguageToggleButton } from "ui/languageToggleButton/LanguageToggleButton";

export function StartPageMainComponent() {
    return (
        <header className={cx(classes.header)}>
            <section className={cx(classes.mainContent, "flexColumn")}>
                <TitlePart />
                <DescribePart />
                <AnchornsPart />
                <LanguageToggleButton />
            </section>
        </header>
    );
}
