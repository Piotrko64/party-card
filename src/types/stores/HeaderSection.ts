export type HeaderSection = {
    name: {
        title: string;
        color: string;
        linearGradient: boolean;
        isStrokeColor: boolean;
        strokeColor: string;
        font: string;
        animation: string;
        fadeIn: string;
    };
    background: {
        color: string;
        linearGradient: boolean;
    };
    textAboveName: {
        text: string;
        color: string;
        font: string;
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
    endText: {
        font: string;
        text: string;
    };
};
