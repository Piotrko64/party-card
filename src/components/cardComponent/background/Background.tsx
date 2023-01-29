import { useEffect } from "react";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { ConfettiComponent } from "./confetti/ConfettiComponent";
import { FireworksComponent } from "./fireworks/FireworksComponent";

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
        </>
    );
}
