import classes from "./gifSection.module.scss";
import GifPicker from "gif-picker-react";
import { tenorKey } from "config/tenorKey";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";

type objectGif = { preview: { url: string } };

export function GifSection() {
    const { gif, changeValueInput } = useHeaderSectionStore();

    function changeGif({ preview }: objectGif) {
        changeValueInput("gif", preview.url, "url");
    }

    function toggleActiveGif() {
        changeValueInput("gif", !gif.isShow, "isShow");
    }

    return (
        <div className={classes.container}>
            <h3> Gif </h3>
            <TextWithToggleButton
                text="Chcesz dodać śmiesznego gifa?"
                isChecked={gif.isShow}
                callback={toggleActiveGif}
            />
            {gif.isShow && (
                <div className={classes.row}>
                    <div>
                        <GifPicker tenorApiKey={tenorKey} onGifClick={changeGif} />
                    </div>
                    <div className={classes.selectedGif}>
                        <h4> Wybrany gif: </h4>
                        {gif.url ? <img src={gif.url} alt="gif" /> : "Nic nie wybrano"}{" "}
                    </div>
                </div>
            )}
        </div>
    );
}
