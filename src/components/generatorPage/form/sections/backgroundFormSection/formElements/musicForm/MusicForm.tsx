import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { InputRange } from "ui/form/inputRange/InputRange";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { InputText } from "ui/form/inputText/InputText";

const MAX_VOLUME = "100";
const MAX_URL_LENGTH = 255;

export function MusicForm() {
  const { music, changeValue } = useBackgroundStore();
  const { t } = useTranslation("generate");

  function toggleMusic() {
    changeValue("music", !music.isMusic, "isMusic");
  }

  function handleChangeVolume(event: ChangeEvent) {
    changeValue("music", (event.target as HTMLInputElement).value, "volume");
  }

  function handleChangeMusicUrl(nameProp: string, newValue: string) {
    changeValue("music", newValue, "url");
  }

  return (
    <>
      <h3>{t("music")}</h3>

      <TextWithToggleButton
        text={t("enableMusic")}
        callbackToToggle={toggleMusic}
        isChecked={music.isMusic}
      />

      {music.isMusic && (
        <div>
          <h4>{t("volume")}</h4>
          <InputRange
            max={MAX_VOLUME}
            callbackToChangeRangeValue={handleChangeVolume}
            intensity={music.volume}
          />

          <InputText
            labelText={t("musicUrlLabel")!}
            namePropertyToChange="url"
            callbackToChangeValueText={handleChangeMusicUrl}
            valueInput={music.url}
            maxLength={MAX_URL_LENGTH}
            placeholder={t("musicUrlPlaceholder")!}
            isVisibleEmojiPicker={false}
          />
        </div>
      )}
    </>
  );
}
