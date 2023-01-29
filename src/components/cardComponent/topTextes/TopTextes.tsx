import classes from "./topTextes.module.scss";
import { useHeaderSectionStore } from "./../../../stores/HeaderSectionStore/HeaderSectionStore";

export function TopTextes() {
    const { name } = useHeaderSectionStore((state) => state);
    const { title } = name;

    return (
        <>
            <div className={classes.textAboveName}>{title}</div>
        </>
    );
}
