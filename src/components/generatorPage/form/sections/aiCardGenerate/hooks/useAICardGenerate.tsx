import { use } from "i18next";
import { useEffect, useState } from "react";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";

export function useAICardGenerate(personName: string, celebrationType: string, additionalNotes = "") {
  const [wasTriggered, setWasTriggered] = useState(false);
  const { setEntireHeaderStore } = useHeaderSectionStore();
  const { setWishesElements } = useWishesSectionStore();
  const { setEntireBackgroundStore } = useBackgroundStore();

  useEffect(() => {
    if (wasTriggered) return;

    async function generate() {
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-4o",
            temperature: 0.3,
            messages: [
              {
                role: "system",
                content: "You are an assistant that generates valid JSON based on a TypeScript schema. Only return the raw JSON with no explanation or markdown.",
              },
              {
                role: "user",
                content: buildPersonalizedPrompt({
                  personName,
                  celebrationType,
                  additionalNotes,
                }),
              },
            ],
          }),
        });

        const result = await response.json();

        if (!response.ok) throw new Error(result?.error?.message || "Unknown error");

        let raw = result.choices?.[0]?.message?.content.trim();

        if (raw.startsWith("```json")) {
          raw = raw.replace(/^```json/, "").replace(/```$/, "").trim();
        } else if (raw.startsWith("```")) {
          raw = raw.replace(/^```/, "").replace(/```$/, "").trim();
        }

        const parsed = JSON.parse(raw);

        setEntireBackgroundStore(parsed.backgroundSection);
        setWishesElements(parsed.wishesSection);
        setEntireHeaderStore(parsed.headerSection);

        setWasTriggered(true);
      } catch (err) {
        console.error("OpenAI JSON Parse Error:", err);
      }
    }

    generate();
  }, [wasTriggered, personName, celebrationType, additionalNotes]);

  return { wasTriggered };
}

export function buildPersonalizedPrompt({
  personName,
  celebrationType,
  additionalNotes = "",
}: {
  personName: string;
  celebrationType: string;
  additionalNotes?: string;
}) {
  return `You are an assistant that generates JSON data for a party card builder application.

Your task is to return a personalized party card for:
- Name: "${personName}"
- Occasion: "${celebrationType}"

${additionalNotes ? `Extra context: ${additionalNotes}` : ""}

Return only **valid JSON** and strictly match the following TypeScript structure. Do not include markdown, comments, or explanations.

Rules:
- Set gif to: { isShow: false, url: "" }
- Use joyful, elegant and warm colors and messages.
- Fonts must be one of: "Oswald", "Noto Serif", "Aboreto", "Jost", "Kaushan", "Playfair"
- Add 0–3 wishes inside the "wishesSection" array.
- Use readable and uplifting values.
- For background icons you can use: "heart", "martini", "star", "gift".

\`\`\`ts
type NamesFont = "Oswald" | "Noto Serif" | "Aboreto" | "Jost" | "Kaushan" | "Playfair";

type ConfettiType = {
  onStart: boolean;
  buttonConfetti: boolean;
  amountConfetti: number;
  isActive: boolean;
};

type BackgroundStore = {
  background: { color: string };
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
};

type HeaderSection = {
  isActive: boolean;
  name: {
    isActive: boolean;
    text: string;
    color: string;
    isGradient: boolean;
    isStrokeColor: boolean;
    strokeColor: string;
    font: NamesFont;
  };
  supriseCard: {
    isActive: boolean;
    isShowCard: boolean;
    text: string;
    color: string;
    backgroundColor: string;
    font: NamesFont;
  };
  textAboveName: {
    isActive: boolean;
    text: string;
    color: string;
    font: NamesFont;
    isGradient: boolean;
  };
  textUnderName: {
    isActive: boolean;
    text: string;
    color: string;
    font: NamesFont;
    isGradient: boolean;
  };
  gif: {
    isShow: boolean;
    url: string;
  };
  endText: {
    isActive: boolean;
    font: NamesFont;
    text: string;
    color: string;
  };
};

type SingleText = { id: string; content: string };
type ListTexts = SingleText[];

type TagCloudType = {
  name: "tagCloud";
  id: string;
  texts: ListTexts;
  color: string;
  font: NamesFont;
};

type WallWishType = {
  name: "wishWall";
  id: string;
  texts: ListTexts;
  color: string;
  font: NamesFont;
};

type ImageURLType = {
  name: "imageURL";
  id: string;
  isBorder: boolean;
  backgroundColor: string;
  url: string;
};

type GifSectionType = {
  name: "gif";
  id: string;
  url: string;
};

type TextType = {
  name: "text";
  id: string;
  size: "normal" | "medium" | "theBiggest";
  text: string;
  isFullWidth: boolean;
  color: string;
  backgroundColor: string;
  font: NamesFont;
  marginTop: number;
  marginBottom: number;
  isGradient: boolean;
};

type UnionWishElements = TagCloudType | WallWishType | ImageURLType | TextType | GifSectionType;

type GeneratedJsonFromGPT = {
  idAuthor: string;
  nameAuthor: string;
  date: string;
  headerSection: HeaderSection;
  backgroundSection: BackgroundStore;
  wishesSection: UnionWishElements[];
};
\`\`\`

Only return valid JSON that fits this structure. Do not include backticks, explanation or markdown.`;
}

