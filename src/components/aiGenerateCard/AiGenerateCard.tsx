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

      <InputText
        labelText="Twój token (ChatGPT / DeepSeek)"
        namePropertyToChange="token"
        valueInput={formData.token}
        callbackToChangeValueText={handleInputChange}
        maxLength={100}
        placeholder="sk-..."
      />

      <InputText
        labelText="Model językowy"
        namePropertyToChange="model"
        valueInput={formData.model}
        callbackToChangeValueText={handleInputChange}
        maxLength={40}
        placeholder="np. gpt-4o"
      />

      <InputText
        labelText="Imię jubilata"
        namePropertyToChange="recipient"
        valueInput={formData.recipient}
        callbackToChangeValueText={handleInputChange}
        maxLength={60}
        placeholder="np. Ania"
      />

      <label>
        Opisz co ma być na kartce. Daj się ponieść kreatywności!
        <div className={styles.textAreaContainer}>
          <textarea
            name="prompt"
            placeholder="Napisz życzenia, wierszyk, żart lub opisz, jak ma wyglądać kartka"
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

      <button type="submit">Tworzymy!</button>
    </form>
  );
}
