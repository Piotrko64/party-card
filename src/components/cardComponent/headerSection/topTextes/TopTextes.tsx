import classes from "./topTextes.module.scss";
import { useHeaderSectionStore } from "../../../../stores/HeaderSectionStore/HeaderSectionStore";
import { getCorrectFont } from "utils/toFonts/getCorrectFont";

export function TopTextes() {
    const { name } = useHeaderSectionStore((state) => state);
    const { title, font } = name;

    return (
        <>
            <div
                className={classes.textAboveName}
                style={{
                    fontFamily: getCorrectFont(font),
                }}
            >
                {title}
            </div>
        </>
    );
}
