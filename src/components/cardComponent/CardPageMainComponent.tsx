import { HeaderSection } from "./headerSection/HeaderSection";
import classes from "./cardPageMainComponent.module.scss";
import cx from "classnames";

export function CardPageMainComponent() {
    return (
        <main className={cx(classes.main, "flexCenter")}>
            <HeaderSection />
        </main>
    );
}
