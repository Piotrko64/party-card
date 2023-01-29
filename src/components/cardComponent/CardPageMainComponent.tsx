import { HeaderSection } from "./headerSection/HeaderSection";
import classes from "./cardPageMainComponent.module.scss";
import cx from "classnames";
import { Background } from "./background/Background";

export function CardPageMainComponent() {
    return (
        <Background>
            <main className={cx(classes.main, "flexCenter")}>
                <HeaderSection />
            </main>
        </Background>
    );
}
