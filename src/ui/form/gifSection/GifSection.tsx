import { objectGif } from "components/generatorPage/form/sections/headerFormSection/formElements/gifSection/GifSection";
import { tenorKey } from "config/tenorKey";
import GifPicker from "gif-picker-react";
import classes from "./gifSection.module.scss";

type Props = { url: string; changeGif: ({ preview }: objectGif) => void };

export function GifSection({ url, changeGif }: Props) {
    return (
        <div className={classes.row}>
            <div>
                <GifPicker tenorApiKey={tenorKey} onGifClick={changeGif} />
            </div>
            <div className={classes.selectedGif}>
                <h4> Wybrany gif: </h4>
                {url ? <img src={url} alt="gif" /> : "Nic nie wybrano"}
            </div>
        </div>
    );
}
