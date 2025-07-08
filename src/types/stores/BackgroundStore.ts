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
  music: {
    isMusic: boolean;
    volume: number;
    url: string;
  };

  changeValue: (
    inputNameProperty: string,
    newValue: string | boolean,
    lastProperty: string
  ) => void;
  setEntireBackgroundStore: (newState: BackgroundStoreWithoutFunctions) => void;
};

export type BackgroundStoreWithoutFunctions = Omit<
  BackgroundStore,
  "changeValue" | "setEntireBackgroundStore"
>;

export type PossiblePropertySectionToChangeBackground =
  | "background"
  | "confetti"
  | "backgroundDecorations"
  | "fireworks"
  | "music";
