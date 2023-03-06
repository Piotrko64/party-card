import classes from "./gifSection.module.scss";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { GifSection } from "ui/form/gifSection/GifSection";
import { useTranslation } from "react-i18next";

export type objectGif = { preview: { url: string } };

export function GifSectionHeader() {
    const { gif, changeValueInput } = useHeaderSectionStore();
    const { t } = useTranslation("generate");

    function changeGif({ preview }: objectGif) {
        changeValueInput("gif", preview.url, "url");
    }

    function toggleActiveGif() {
        changeValueInput("gif", !gif.isShow, "isShow");
    }

    return (
        <div className={classes.container}>
            <h4> Gif </h4>
            <TextWithToggleButton
                text={t("isGif")}
                isChecked={gif.isShow}
                callbackToToggle={toggleActiveGif}
            />
            {gif.isShow && <GifSection url={gif.url} changeGif={changeGif} />}
        </div>
    );
}
