import { set } from "lodash";
import { useEffect } from "react";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";

export function useMusicOnStartCard() {
  const { music } = useBackgroundStore();

  useEffect(() => {
    if (music.isMusic && music.url.trim() !== "") {
      const audio = new Audio(music.url);
      audio.loop = true;
      audio.volume = music.volume / 100;

      audio.play().catch((err) => {
        console.warn("Music playback failed:", err);
      });

      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [music.isMusic, music.url, music.volume]);
}
