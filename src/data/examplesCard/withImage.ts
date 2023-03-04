export const withImageExampleCard = {
    id: "withImage",
    headerSection: {
        isActive: true,
        name: {
            isActive: false,
            text: "Krzysztofie",
            color: "#fff",
            isGradient: false,
            isStrokeColor: false,
            strokeColor: "white",
            font: "Kaushan",
        },
        supriseCard: {
            isActive: true,
            isShowCard: true,
            text: "Prezentu szukaj w kuchni!",
            color: "#222",
            backgroundColor: "#fff",
            font: "Jost",
            isGradient: false,
        },
        textAboveName: {
            isActive: true,
            text: "Wszystkiego dobrego!",
            color: "white",
            font: "Oswald",
            isGradient: false,
        },
        textUnderName: {
            isActive: true,
            text: "P.S. W domu czeka na Ciebie prezent",
            color: "white",
            font: "Noto Serif",
            isGradient: false,
        },
        gif: {
            isShow: true,
            url: "https://media.tenor.com/M-34lT1ySIIAAAAM/hb.gif",
        },
        endText: {
            isActive: false,
            font: "Noto Serif",
            text: "yuyuy",
            color: "white",
        },
    },
    wishesSection: [
        {
            id: "9a1aa0c6-cb22-441b-aac4-e8453f531d6b",
            name: "text",
            text: "Spełnienia marzeń i udanego przyjęcia!",
            isFullWidth: true,
            color: "linear-gradient(0deg, #cc2b5e 36%, #753a88 100%)",
            backgroundColor: "#fff",
            font: "Jost",
            marginTop: 20,
            marginBottom: "44.6",
            isGradient: true,
            size: "theBiggest",
        },
        {
            id: "8cd3742f-1ba3-44b8-8ca0-2f7d3736230a",
            name: "imageURL",
            isBorder: true,
            backgroundColor: "#fff",
            url: "/forExamples/party.jpg",
        },
        {
            id: "1ec401ab-b1d0-43be-a007-d2136913c720",
            name: "text",
            text: "Prezent przygotowali...",
            isFullWidth: false,
            color: "linear-gradient(0deg, #cc2b5e 36%, #753a88 100%)",
            backgroundColor: "#fff",
            font: "Jost",
            marginTop: "78.4",
            marginBottom: "0",
            isGradient: true,
            size: "normal",
        },
        {
            name: "tagCloud",
            texts: [
                {
                    id: "4d106799-1c3a-4838-b799-21c4d779dbe5",
                    content: "Piotr",
                },
                {
                    id: "2374a563-75ef-4c58-9b97-797c9a3e5043",
                    content: "Adam",
                },
                {
                    id: "6eea2391-074a-4608-aafa-ee8eb0c9a38c",
                    content: "Kamil",
                },
                {
                    id: "348ee0dc-1126-4095-8311-7122e008fccd",
                    content: "Ania",
                },
                {
                    id: "3b7a42af-0d84-452f-a72f-030f2789ac6d",
                    content: "Marek",
                },
                {
                    id: "d21f9507-60fd-46eb-9af5-7dfafb2112ea",
                    content: "Klaudia",
                },
            ],
            color: "#fff",
            font: "Oswald",
            id: "929a2b02-9796-4186-99ab-75057bb65031",
        },
    ],
    backgroundSection: {
        background: {
            color: "linear-gradient(90deg, rgba(18,194,233,1) 0%, rgba(196,113,237,1) 47%, rgba(210,66,74,1) 100%)",
            isGradient: true,
        },
        confetti: {
            onStart: true,
            buttonConfetti: false,
            amountConfetti: "434.6",
            isActive: true,
        },
        backgroundDecorations: {
            isDecorations: true,
            kindDecorations: "star",
            color: "#fff",
            isGradient: false,
        },
        fireworks: {
            isFireworks: true,
            intensity: "0.8",
        },
    },
};
