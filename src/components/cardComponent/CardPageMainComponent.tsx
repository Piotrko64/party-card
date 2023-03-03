import { HeaderSection } from "./headerSection/HeaderSection";
import classes from "./cardPageMainComponent.module.scss";
import cx from "classnames";
import { Background } from "./background/Background";
import { WishesSection } from "./wishesSection/WishesSection";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { Footer } from "components/footer/Footer";

export function CardPageMainComponent() {
    const { isActive } = useHeaderSectionStore();

    return (
        <Background>
            {isActive && (
                <div className={cx(classes.headerSection, "flexCenter")}>
                    <HeaderSection />
                </div>
            )}
            <WishesSection />
        </Background>
    );
}
