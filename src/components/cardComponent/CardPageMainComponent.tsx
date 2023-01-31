import { HeaderSection } from "./headerSection/HeaderSection";
import classes from "./cardPageMainComponent.module.scss";
import cx from "classnames";
import { Background } from "./background/Background";
import { WishesSection } from "./wishesSection/WishesSection";

export function CardPageMainComponent() {
    return (
        <Background>
            <div className={cx(classes.headerSection, "flexCenter")}>
                <HeaderSection />
            </div>
            <WishesSection />
        </Background>
    );
}
