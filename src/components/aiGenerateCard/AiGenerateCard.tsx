import { useState } from "react";
import { useTranslation } from "react-i18next";
import { InputText } from "ui/form/inputText/InputText";
import { useNavigate } from "react-router-dom";
import styles from "./aiGeneratedCard.module.scss";
import { HomeLink } from "ui/homeLink/HomeLink";
import cx from "classnames";
import { useAICardGenerate } from "hooks/useAICardGenerate";

export function AiGenerateCard() {
  const { t } = useTranslation("ai");
  const navigate = useNavigate();

  const [{ recipient, token, prompt, model }, setFormData] = useState({
    token: "",
    model: "gpt-4o",
    recipient: "",
    prompt: "",
  });

  const [loading, setLoading] = useState(false);
  const [isCardGenerated, setIsCardGenerated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const generateCard = useAICardGenerate();

  const handleInputChange = (nameProperty: string, newValue: string) => {
    setFormData((prev) => ({
      ...prev,
      [nameProperty]: newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setIsCardGenerated(false);
    setErrorMessage("");
    try {
      await generateCard(recipient, prompt, token, model);
      setIsCardGenerated(true);
    } catch (err: any) {
      console.error("Generation error:", err);
      setErrorMessage(
        err.message || "Wystąpił nieoczekiwany błąd podczas generowania kartki."
      );
    } finally {
      setLoading(false);
    }
  };

  const goToGenerator = () => navigate("/generateCard");
  const goToPreview = () => navigate("/previewCard");

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <HomeLink />

      <h1>🎉 {t("aiGenerateCard")}</h1>

      <p className={styles.description}>
        Stwórz kartkę z życzeniami z... użyciem AI! Musisz mieć jednak swój
        własny klucz API. Potem wystarcy już tylko dobrze uzupełnić propmty i
        poczekać na wynik!
      </p>

      <InputText
        labelText={t("tokenLabel")!}
        namePropertyToChange="token"
        valueInput={token}
        callbackToChangeValueText={handleInputChange}
        maxLength={100}
        placeholder="sk-..."
        isVisibleEmojiPicker={false}
      />
      <p className={styles.helper}>{t("tokenHelper")}</p>

      <InputText
        labelText={t("modelLabel")!}
        namePropertyToChange="model"
        valueInput={model}
        callbackToChangeValueText={handleInputChange}
        maxLength={40}
        placeholder={t("modelHelper")!}
        isVisibleEmojiPicker={false}
      />
      <p className={styles.helper}>{t("modelHelper")}</p>

      <InputText
        labelText={t("recipientLabel")!}
        namePropertyToChange="recipient"
        valueInput={recipient}
        callbackToChangeValueText={handleInputChange}
        maxLength={60}
        placeholder={t("recipientLabel")!}
        isVisibleEmojiPicker={false}
      />

      <label>
        {t("promptLabel")}
        <div className={styles.textAreaContainer}>
          <textarea
            name="prompt"
            value={prompt}
            onChange={(e) => handleInputChange("prompt", e.target.value)}
            required
            className={styles.textArea}
            maxLength={2000}
          />
        </div>
      </label>

      <button className={styles.createButton} type="submit" disabled={loading}>
        {loading ? t("loadingText") : t("submitButton")}
      </button>

      {errorMessage && <p className={styles.error}>{errorMessage}</p>}

      {isCardGenerated && !errorMessage && (
        <div className={styles.generatedActions}>
          <p className={styles.successMessage}>{t("generationSuccess")}</p>

          <button
            type="button"
            className={styles.secondaryButton}
            onClick={goToGenerator}
          >
            {t("generatorButton")}
          </button>
          <p className={styles.helper}>{t("generatorHelper")}</p>

          <button
            type="button"
            className={cx(styles.secondaryButton, styles.previewButton)}
            onClick={goToPreview}
          >
            {t("previewButton")}
          </button>
          <p className={styles.helper}>{t("previewHelper")}</p>
        </div>
      )}
    </form>
  );
}
