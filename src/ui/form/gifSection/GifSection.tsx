import { objectGif } from "components/generatorPage/form/sections/headerFormSection/formElements/gifSection/GifSection";
import GifPicker from "gif-picker-react";
import { useTranslation } from "react-i18next";
import classes from "./gifSection.module.scss";

type Props = { url: string; changeGif: ({ preview }: objectGif) => void };

export function GifSection({ url, changeGif }: Props) {
    const { t } = useTranslation("ui");

    return (
        <div className={classes.row}>
            <div>
                <GifPicker
                    tenorApiKey={import.meta.env.VITE_TENOR_KEY!}
                    onGifClick={changeGif}
                    width={300}
                    autoFocusSearch={false}
                />
            </div>
            <div className={classes.selectedGif}>
                <h4> {t("selectedGif")}: </h4>
                {url ? <img src={url} alt="gif" /> : t("noGif")}
            </div>
        </div>
    );
}
