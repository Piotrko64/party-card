import { objectGif } from "components/generatorPage/form/sections/headerFormSection/formElements/gifSection/GifSection";
import GifPicker from "gif-picker-react";
import classes from "./gifSection.module.scss";

type Props = { url: string; changeGif: ({ preview }: objectGif) => void };

export function GifSection({ url, changeGif }: Props) {
    return (
        <div className={classes.row}>
            <div>
                <GifPicker tenorApiKey={import.meta.env.VITE_TENOR_KEY!} onGifClick={changeGif} width={300} />
            </div>
            <div className={classes.selectedGif}>
                <h4> Wybrany gif: </h4>
                {url ? <img src={url} alt="gif" /> : "Nic nie wybrano"}
            </div>
        </div>
    );
}
