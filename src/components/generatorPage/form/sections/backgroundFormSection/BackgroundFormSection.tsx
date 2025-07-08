import { BackgroundForm } from "./formElements/backgroundColorForm/BackgroundForm";
import { FireworksManage } from "./formElements/fireworksManage/FireworksManage";
import { ConfettiManage } from "./formElements/confettiManage/ConfettiManage";
import { DecorationPanel } from "./formElements/decorationsPanel/DecorationsPanel";
import { useTranslation } from "react-i18next";
import { MusicForm } from "./formElements/musicForm/MusicForm";

export function BackgroundFormSection() {
  const { t } = useTranslation("generate");

  return (
    <div>
      <h2 className="background">{t("backgroundSectionTitle")}</h2>

      <div className="grayBlock">
        <BackgroundForm />
      </div>
      <div className="grayBlock">
        <FireworksManage />
      </div>
      <div className="grayBlock">
        <ConfettiManage />
      </div>
      <div className="grayBlock">
        <DecorationPanel />
      </div>
      <div className="grayBlock">
        <MusicForm />
      </div>
    </div>
  );
}
