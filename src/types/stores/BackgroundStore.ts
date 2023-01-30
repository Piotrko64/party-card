export type BackgroundStore = {
    background: {
        color: string;
    };
    confetti: {
        onStart: boolean;
        buttonConfetti: boolean;
        amountConfetti: number;
        isActive: boolean;
    };
    backgroundDecorations: {
        isDecorations: boolean;
        kindDecorations: string;
        color: string;
    };
    fireworks: {
        isFireworks: boolean;
        intensity: number;
    };
    turnOnConfetti: () => void;
    turnOffConfetti: () => void;
};
