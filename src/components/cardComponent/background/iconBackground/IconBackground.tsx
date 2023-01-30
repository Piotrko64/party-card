import { ScrollParallax } from "react-just-parallax";
import styles from "./iconBackground.module.scss";
import { dataIconBackground } from "data/background/dataIconBackground";
import { Heart } from "ui/svg/Heart";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";

export function IconBackground() {
    const { backgroundDecorations } = useBackgroundStore();

    return (
        <div className={styles.none}>
            {dataIconBackground.map((icon) => (
                <ScrollParallax
                    strength={icon.strenth}
                    lerpEase={0.6}
                    isAbsolutelyPositioned
                    key={icon.strenth + icon.top + icon.left}
                    // enableOnTouchDevice={true}
                >
                    <Heart
                        top={icon.top}
                        left={icon.left}
                        right={icon.right}
                        color={backgroundDecorations.color}
                    />
                </ScrollParallax>
            ))}
        </div>
    );
}
