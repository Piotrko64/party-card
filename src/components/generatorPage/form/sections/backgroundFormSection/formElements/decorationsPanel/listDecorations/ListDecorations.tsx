import { dataTypeIcon } from "data/background/dataTypeIcon";
import { dataIconBackground } from "data/background/dataIconBackground";
import classes from "./listDecorations.module.scss";

export function ListDecorations() {
    const iconProps = {
        left: "0",
        right: "0",
        color: "red",
    };

    return (
        <div className={classes.container}>
            {dataTypeIcon(iconProps).map((icon) => (
                <div className={classes.relative}>{icon.component}</div>
            ))}
        </div>
    );
}
