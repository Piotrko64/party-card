export type BackgroundStore = {
    background: {
        color: string;
        linearGradient: boolean;
    };
    confetti: {
        onStart: boolean;
        buttonConfetti: boolean;
    };
    backgroundDecorations: {
        isDecorations: boolean;
        kindDecorations: string;
    };
    fireworks: {
        isFireworks: boolean;
        intensity: number;
    };
};
