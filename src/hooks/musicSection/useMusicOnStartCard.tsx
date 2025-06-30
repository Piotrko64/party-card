import { useEffect } from "react";

export function useMusicOnStartCard(url = "") {
  useEffect(() => {
    const audio = new Audio(url);
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch((err) => {
      console.warn("Music playback failed:", err);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [url]);
}
