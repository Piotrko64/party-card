export type ConfettiType = {
    onStart: boolean;
    buttonConfetti: boolean;
    amountConfetti: number;
    isActive: boolean;
};

export type BackgroundStore = {
    background: {
        color: string;
    };
    confetti: ConfettiType;
    backgroundDecorations: {
        isDecorations: boolean;
        kindDecorations: string;
        color: string;
    };
    fireworks: {
        isFireworks: boolean;
        intensity: number;
    };
    turnOnConfetti: () => any;
    turnOffConfetti: () => any;
};
