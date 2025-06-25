import { useAICardGenerate } from "components/generatorPage/form/sections/aiCardGenerate/hooks/useAICardGenerate";
import { useState } from "react";
import { InputText } from "ui/form/inputText/InputText";

export function AiGenerateCard() {
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


    generateCard( formData.recipient,
    formData.prompt,
    formData.token,
    formData.model);
    alert(
      `Token: ${formData.token}\nModel: ${formData.model}\nImię jubilata: ${formData.recipient}\nPrompt:\n${formData.prompt}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>🎉 Generator kartki urodzinowej</h2>

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
        Co chcesz napisać na kartce?
        <textarea
          name="prompt"
          placeholder="Napisz życzenia, wierszyk, żart lub opisz, jak ma wyglądać kartka"
          value={formData.prompt}
          onChange={(e) =>
            handleInputChange("prompt", e.target.value, "text")
          }
          required
        />
      </label>

      <button type="submit">Wyślij</button>
    </form>
  );
}
