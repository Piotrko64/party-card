import classes from "./imageURL.module.scss";
import cx from "classnames";

type Props = Record<"url" | "backgroundColor", string> & { isBorder: boolean };

export function ImageURL({ url, isBorder, backgroundColor }: Props) {
    return url ? (
        <div
            className={cx(classes.containerImg, isBorder && classes.withBorder)}
            style={{ backgroundColor: isBorder ? backgroundColor : "transparent" }}
        >
            <img src={url} alt="photo" />
        </div>
    ) : null;
}
