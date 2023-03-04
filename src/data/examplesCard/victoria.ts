import { BackgroundStore } from "types/stores/BackgroundStore";
import { HeaderSection } from "types/stores/HeaderSection";
import { WishesSectionStore } from "types/stores/WishesSectionStore";
import { WishesSection } from "./../../components/cardComponent/wishesSection/WishesSection";

export const victoriaExampleCard = {
    id: "viki",
    headerSection: {
        isActive: true,
        name: {
            isActive: false,
            text: "Victoria",
            color: "linear-gradient(110deg, #ff0000 0%, #bc10e7 50%, #5e92d0 100%)",
            isGradient: true,
            isStrokeColor: true,
            strokeColor: "#fff",
            font: "Oswald",
        },
        supriseCard: {
            isActive: false,
            isShowCard: true,
            text: "",
            color: "blue",
            backgroundColor: "red",
            font: "Oswald",
        },
        textAboveName: {
            isActive: true,
            text: "Happy Birthday",
            color: "white",
            font: "Aboreto",
            isGradient: false,
        },
        textUnderName: {
            isActive: true,
            text: " ❤️ ❤️ ❤️",
            color: "white",
            font: "Noto Serif",
            isGradient: false,
        },
        gif: {
            isShow: false,
            url: "",
        },
        endText: {
            isActive: true,
            font: "Aboreto",
            text: "⬇️⬇️ I wish you... ⬇️⬇️",
            color: "#fff",
            isGradient: false,
        },
    },

    backgroundSection: {
        background: {
            color: "#07090e",
            isGradient: false,
        },
        confetti: {
            onStart: true,
            buttonConfetti: true,
            amountConfetti: "1083.2",
            isActive: true,
        },
        backgroundDecorations: {
            isDecorations: true,
            kindDecorations: "heart",
            color: "#cb4141",
            isGradient: false,
        },
        fireworks: {
            isFireworks: true,
            intensity: "8.3",
        },
    },

    wishesSection: [
        {
            id: "e6d3ada8-cc73-45ba-910d-d8c73f120284",
            name: "wishWall",
            texts: [
                {
                    id: "620ebeb9-bc9f-4c0f-9210-7f12a525c41d",
                    content: "smiles ",
                },
                {
                    id: "bfd728ed-5509-4177-971c-cbd108defb55",
                    content: "happiness",
                },
                {
                    id: "13dcde25-f739-451c-846f-2039922b5f12",
                    content: "money",
                },
                {
                    id: "0bd5c1ab-a9ee-4315-bf78-0d6d6af5f9b5",
                    content: "lots of free time",
                },
                {
                    id: "75bc776d-092e-4591-9363-4d6c10a399fe",
                    content: "gifts ",
                },
                {
                    id: "48a2c72a-fff5-4cdf-a29b-7dc1f4860862",
                    content: "happy moments",
                },
            ],
            color: "#fff",
            font: "Aboreto",
        },
        {
            id: "ce7892fa-983a-4124-af61-570f17e2d54a",
            name: "text",
            text: "Remember! You are awesome person!",
            isFullWidth: false,
            color: "linear-gradient(110deg, #ff0000 0%, #bc10e7 50%, #5e92d0 100%)",
            backgroundColor: "#fff",
            font: "Oswald",
            marginTop: "45.9",
            marginBottom: "237.8",
            isGradient: true,
            size: "medium",
        },
    ],
};
