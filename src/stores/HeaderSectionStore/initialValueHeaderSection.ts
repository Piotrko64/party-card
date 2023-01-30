import { HeaderSection } from "types/stores/HeaderSection";

export const initialValueHeaderStore: HeaderSection = {
    name: {
        title: "My name",
        color: "linear-gradient(110deg,rgb(120,19,235) 0%,rgb(142,21,255) 10%,rgb(150,57,236) 25%,rgba(227,56,56,1) 50%,rgba(236,170,0,1) 80%,rgb(233,186,68) 100%)",
        isGradient: true,
        isStrokeColor: true,
        strokeColor: "white",
        font: "Oswald",
    },

    textAboveName: {
        text: "Happy Birthday",
        color: "white",
        font: "Oswald",
        isGradient: false,
    },
    textUnderName: {
        text: "Mam nadzieję że Ci się spodoba!",
        color: "white",
        font: "Noto Serif",
        isGradient: false,
    },

    endText: {
        font: "Noto Serif",
        text: "",
    },
};
