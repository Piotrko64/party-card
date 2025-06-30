import { useState } from "react";
import { useTranslation } from "react-i18next";
import { InputText } from "ui/form/inputText/InputText";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import styles from "./musicFormSection.module.scss";

export function MusicFormSection() {
  const { t } = useTranslation("generate");
  const [isActive, setIsActive] = useState(true);
  const [musicUrl, setMusicUrl] = useState("");
  const [musicPrompt, setMusicPrompt] = useState("");

  const handleToggle = () => setIsActive(!isActive);

  const handleInputChange = (key: string, value: string) => {
    if (key === "musicUrl") setMusicUrl(value);
    if (key === "musicPrompt") setMusicPrompt(value);
  };

  const handleGenerateMusic = async () => {
    // Placeholder: Call to Suno API could go here
    const fakeGeneratedUrl = "https://example.com/fake-music.mp3";
    setMusicUrl(fakeGeneratedUrl);
  };

  return (
    <div className={styles.musicFormSection}>
      <h2 className="headerSection">{t("musicSection")}</h2>
      <p>{t("musicDescription")}</p>

      <TextWithToggleButton
        isChecked={isActive}
        callbackToToggle={handleToggle}
        text={t("enable")}
      />

      {!isActive ? (
        <h3 className={styles.alert}>{t("sectionDisabled")}</h3>
      ) : (
        <>
          <div className="grayBlock">
            <InputText
              labelText={t("musicUrlLabel")!}
              namePropertyToChange="musicUrl"
              valueInput={musicUrl}
              callbackToChangeValueText={handleInputChange}
              maxLength={300}
              placeholder={t("musicUrlPlaceholder")!}
            />
          </div>

          <div className="grayBlock">
            <InputText
              labelText={t("musicPromptLabel")!}
              namePropertyToChange="musicPrompt"
              valueInput={musicPrompt}
              callbackToChangeValueText={handleInputChange}
              maxLength={400}
              placeholder={t("musicPromptPlaceholder")!}
            />
            <button
              type="button"
              className={styles.secondaryButton}
              onClick={handleGenerateMusic}
            >
              {t("generateMusicButton")}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
