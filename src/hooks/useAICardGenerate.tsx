import { useEffect, useState } from "react";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";

const API_URL = "https://suno-ai-vercel-serverless.vercel.app/api/party-card/generate-party-card";

export function useAICardGenerate() {
  const [wasTriggered, setWasTriggered] = useState(false);
  const { setEntireHeaderStore } = useHeaderSectionStore();
  const { setWishesElements } = useWishesSectionStore();
  const { setEntireBackgroundStore } = useBackgroundStore();

  async function generate(
    personName: string,
    additionalNotes = "",
    token: string,
    model: string = "gpt-4o"
  ) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personName,
          additionalNotes,
          token,
          model,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error?.error || "Unknown backend error");
      }

      const parsed = await response.json();

      setEntireBackgroundStore(parsed.backgroundSection);
      setWishesElements(parsed.wishesSection);
      setEntireHeaderStore(parsed.headerSection);
      setWasTriggered(true);

      console.log("Generated JSON:", parsed);
    } catch (err) {
      console.error("Backend call error:", err);
    }
  }

  return generate;
}
