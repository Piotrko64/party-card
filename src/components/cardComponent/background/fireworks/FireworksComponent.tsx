import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import Fireworks from "@fireworks-js/react";
export function FireworksComponent() {
    const { fireworks, background } = useBackgroundStore((state) => state);
    const { intensity, isFireworks } = fireworks;

    return (
        <>
            {isFireworks && (
                <Fireworks
                    options={{
                        rocketsPoint: {
                            min: 0,
                            max: 120,
                        },
                        gravity: 0.8,
                        traceSpeed: 9,
                        intensity,
                        explosion: 12,
                    }}
                    style={{
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        position: "fixed",
                        background: background.color,
                        zIndex: 1,
                    }}
                />
            )}
        </>
    );
}
