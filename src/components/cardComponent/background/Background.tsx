import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { ConfettiComponent } from "./confetti/ConfettiComponent";
import { FireworksComponent } from "./fireworks/FireworksComponent";
import { IconBackground } from "./iconBackground/IconBackground";
import classes from "./background.module.scss";

export function Background({ children }: React.PropsWithChildren) {
    const { background } = useBackgroundStore();

    return (
        <main style={{ background: background.color }} className={classes.main}>
            {children}
            <FireworksComponent />
            <ConfettiComponent />
            <IconBackground />
        </main>
    );
}
