import { useAICardGenerate } from "components/generatorPage/form/sections/aiCardGenerate/hooks/useAICardGenerate";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { InputText } from "ui/form/inputText/InputText";
import styles from "./aiGeneratedCard.module.scss";

export function AiGenerateCard() {
  const { t } = useTranslation("ai");

  const [formData, setFormData] = useState({
    token: "",
    model: "gpt-4o",
    recipient: "",
    prompt: "",
  });

  const generateCard = useAICardGenerate();

  const handleInputChange = (
    nameProperty: string,
    newValue: string,
    lastProperty: "text"
  ) => {
    setFormData((prev) => ({
      ...prev,
      [nameProperty]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    generateCard(
      formData.recipient,
      formData.prompt,
      formData.token,
      formData.model
    );
    alert(
      `Token: ${formData.token}\nModel: ${formData.model}\nImię jubilata: ${formData.recipient}\nPrompt:\n${formData.prompt}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h2>🎉 {t("aiGenerateCard")}</h2>

      <p className={styles.description}>
        Stwórz kartkę z życzeniami z... użyciem AI! Musisz mieć jednak swój
        własny klucz API. Potem wystarcy już tylko dobrze uzupełnić propmty i
        poczekać na wynik!
      </p>

      {t("tokenLabel")}
      <InputText
        namePropertyToChange="token"
        valueInput={formData.token}
        callbackToChangeValueText={handleInputChange}
        maxLength={100}
        placeholder="sk-..."
      />
      <p className={styles.helper}>{t("tokenHelper")}</p>

      {t("modelLabel")}
      <InputText
        namePropertyToChange="model"
        valueInput={formData.model}
        callbackToChangeValueText={handleInputChange}
        maxLength={40}
        placeholder={t("modelHelper")!}
      />
      <p className={styles.helper}>{t("modelHelper")}</p>

      <label>
        {t("recipientLabel")}
        <InputText
          namePropertyToChange="recipient"
          valueInput={formData.recipient}
          callbackToChangeValueText={handleInputChange}
          maxLength={60}
          placeholder={t("recipientLabel")!}
        />
      </label>

      <label>
        {t("promptLabel")}
        <div className={styles.textAreaContainer}>
          <textarea
            name="prompt"
            placeholder={t("promptLabel")!}
            value={formData.prompt}
            onChange={(e) =>
              handleInputChange("prompt", e.target.value, "text")
            }
            required
            className={styles.textArea}
            maxLength={2000}
          />
        </div>
      </label>

      <button className={styles.createButton} type="submit">
        {t("submitButton")}
      </button>
    </form>
  );
}
