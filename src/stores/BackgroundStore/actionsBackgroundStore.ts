export const actionsBackgroundStore = (set: any) => ({
    turnOnConfetti: () => set(() => ({ confetti: { isActive: true } })),
    turnOffConfetti: () => set(() => ({ confetti: { isActive: false } })),
});
