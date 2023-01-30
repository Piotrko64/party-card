import { useEffect } from "react";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { ConfettiComponent } from "./confetti/ConfettiComponent";
import { FireworksComponent } from "./fireworks/FireworksComponent";
import { IconBackground } from "./iconBackground/IconBackground";

export function Background({ children }: React.PropsWithChildren) {
    const { background } = useBackgroundStore();

    useEffect(() => {
        document.body.style.backgroundColor = background.color;
    }, []);

    return (
        <>
            {children}
            <FireworksComponent />
            <ConfettiComponent />
            <IconBackground />
        </>
    );
}
